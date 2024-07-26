import React, { useState, useEffect, useRef } from 'react';
import Moveable from "react-moveable";
import backBlack from '../Images/T-shirts/Black/back.png';
import frontBlack from '../Images/T-shirts/Black/front.png';
import frontBlue from '../Images/T-shirts/Blue/front.png';
import backBlue from '../Images/T-shirts/Blue/back.png';
import backGreen from '../Images/T-shirts/Green/back.png';
import frontGreen from '../Images/T-shirts/Green/front.png';
import frontWhite from '../Images/T-shirts/White/front.png';
import backWhite from '../Images/T-shirts/White/back.png';
import { IoMdClose } from "react-icons/io";
import { FaBold } from "react-icons/fa";
import { FaItalic } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import { useNavigate } from 'react-router-dom';

function Customization() {
  const [color, setColor] = useState("Black");
  const [isFront, setIsFront] = useState(true);
  const [size, setSize] = useState("M");
  const [frontElements, setFrontElements] = useState([]);
  const [backElements, setBackElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [newElementId, setNewElementId] = useState(null);
  const [showTextInputDialog, setShowTextInputDialog] = useState(false)
  const [text, setText] = useState("your text")
  const containerRef = useRef(null);
  const [textColor, setTextColor] = useState('text-gray-900');
  const [fontFamily, setFontFamily] = useState('font-sans');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [fontSize, setFontSize] = useState('md');
  const navigate = useNavigate(); 
  const images = {
    Black: { front: frontBlack, back: backBlack },
    Blue: { front: frontBlue, back: backBlue },
    Green: { front: frontGreen, back: backGreen },
    White: { front: frontWhite, back: backWhite },
  };

  const addText = () => {
    const newElement = { id: Date.now(), type: 'text', content: text, isBold, isItalic, fontSize, fontFamily, textColor, x: 100, y: 100, width: 100, height: 30, rotation: 0 };
    if (isFront) {
      setFrontElements([...frontElements, newElement]);
    } else {
      setBackElements([...backElements, newElement]);
    }
    setNewElementId(newElement.id);
    setShowTextInputDialog(false)
  };

  const addImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const newElement = { id: Date.now(), type: 'image', content: event.target.result, x: 100, y: 100, width: 100, height: 100, rotation: 0 };
      if (isFront) {
        setFrontElements([...frontElements, newElement]);
      } else {
        setBackElements([...backElements, newElement]);
      }
      setNewElementId(newElement.id);
    };
    reader.readAsDataURL(file);
  };

  const updateElement = (id, changes) => {
    if (isFront) {
      setFrontElements(frontElements.map(el => el.id === id ? { ...el, ...changes } : el));
    }
    else
      setBackElements(backElements.map(el => el.id === id ? { ...el, ...changes } : el))

  };

  const handleDeselect = (e) => {
    if (e.target.id === 'design-canvas' || e.target.tagName === 'IMG') {
      setSelectedId(null);
    }
  };

  const handleDelete = (e) => {
    if (e.key === 'Backspace' && selectedId !== null) {
      if (isFront) {
        setFrontElements(frontElements.filter(el => el.id !== selectedId));
      }
      else
        setBackElements(backElements.filter(el => el.id !== selectedId));
      setSelectedId(null);
    }
  };

  useEffect(() => {
    if (newElementId !== null) {
      setSelectedId(newElementId);
      setNewElementId(null);
    }
  }, [frontElements, backElements]);

  useEffect(() => {
    window.addEventListener('keydown', handleDelete);
    return () => {
      window.removeEventListener('keydown', handleDelete);
    };
  }, [selectedId, frontElements, backElements]);

  const getBounds = () => {
    if (!containerRef.current) return { left: 0, top: 0, right: 0, bottom: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return {
      left: 0,
      top: 0,
      right: rect.width,
      bottom: rect.height,
    };
  };
  const handleClickSign = () => {
    navigate('/HomePage', { replace: true }); // navigate to /another-page
  };
  const keepElementInBounds = (left, top, width, height) => {
    const bounds = getBounds();
    const maxX = bounds.right - width;
    const maxY = bounds.bottom - height;
    return {
      x: Math.min(Math.max(bounds.left, left), maxX),
      y: Math.min(Math.max(bounds.top, top), maxY),
    };
  };


  const exportDesign = async () => {
    const exportSide = async (side) => {
      setIsFront(side === 'front');
      await new Promise(resolve => setTimeout(resolve, 0)); // Wait for render
      const canvas = await html2canvas(containerRef.current);
      return canvas.toDataURL('image/png');
    };

    const frontImage = await exportSide('front');
    const backImage = await exportSide('back');

    console.log('Front Image:', frontImage);
    console.log('Back Image:', backImage);

    // Example of how you might send this to a backend:
    // const response = await fetch('/api/save-design', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ frontImage, backImage, color, size })
    // });
    // const result = await response.json();
    // console.log(result);
  };

  const currentElements = isFront ? frontElements : backElements;
  return (
  <div>
  <nav className="bg-white shadow-md sticky top-0 min-w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
        <button className=" bgblueden  text-xl  borderbluedent border-2 rounded-xl px-8  text-white font-bold py-1 focus:outline-none focus:shadow-outline" onClick={handleClickSign}>
            <span className=" text-2xl font-extrabold">&lt;   </span>Back 
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="/about" className="bluedenhover">
            Home
          </a>
          <a href="/about" className="bluedenhover">
            About
          </a>
          <a href="/services" className="bluedenhover">
            Services
          </a>
          <a href="/market" className="bluedenhover">
            Market
          </a>
        </div>
        <div className=" md:flex  items-center mr-8 ">
          <a href="/" className="text-xl font-bold blueden ml-8">
          <img
            className=" w-2/4 object-cover "
            src="./Amer-Logo1.png"
            alt="Logo Image"
          />
          </a>
        </div>
      </div>
    </nav>
  <div className="flex flex-col md:flex-row p-4">
      {showTextInputDialog &&
        <div className='fixed top-20 left-1/3 w-[28rem] pb-5 bg-gray-500 opacity-[0.98] z-50 flex flex-col justify-between items-center rounded-lg'>
          <div className=' bgblueden p-2 flex items-center justify-between w-full'>
            <h3 className='text-2xl font-bold text-white '>Add Text</h3>
            <IoMdClose onClick={() => setShowTextInputDialog(false)} className='size-6 hover:cursor-pointer text-white' />
          </div>

          <h3 className={`${textColor} ${isBold ? 'font-bold' : ''} ${isItalic ? 'italic' : ''} ${fontFamily} text-${fontSize} mt-3`}>{text}</h3>
          <div className="mb-6 w-4/5">
            <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text</label>
            <textarea type="text" value={text} onChange={e => setText(e.target.value)} id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
          </div>
          <div className="flex flex-wrap justify-between">
            <button onClick={() => setTextColor('text-red-500')} className="bg-red-500 hover:bg-red-700 h-8 rounded-full font-bold py-2 px-4 m-1"></button>
            <button onClick={() => setTextColor('text-blue-500')} className="bg-blue-500 hover:bg-blue-700 h-8 rounded-full font-bold py-2 px-4 m-1"></button>
            <button onClick={() => setTextColor('text-green-500')} className="bg-green-500 hover:bg-green-700 h-8 rounded-full font-bold py-2 px-4 m-1"></button>
            <button onClick={() => setTextColor('text-yellow-500')} className="bg-yellow-500 hover:bg-yellow-700 h-8 rounded-full font-bold py-2 px-4 m-1"></button>
            <button onClick={() => setTextColor('text-purple-500')} className="bg-purple-500 hover:bg-purple-700 h-8 rounded-full font-bold py-2 px-4 m-1"></button>
            <button onClick={() => setTextColor('text-orange-500')} className="bg-orange-500 hover:bg-orange-700 h-8 rounded-full font-bold py-2 px-4 m-1"></button>
            <button onClick={() => setTextColor('text-pink-500')} className="bg-pink-500 hover:bg-pink-700 h-8 rounded-full font-bold py-2 px-4 m-1"></button>
            <button onClick={() => setTextColor('text-white')} className="bg-white h-8 rounded-full font-bold py-2 px-4 m-1"></button>
            <button onClick={() => setTextColor('text-black')} className="bg-black h-8 rounded-full font-bold py-2 px-4 m-1"></button>
          </div>
          <div className='flex justify-evenly w-full'>

            <div className="flex justify-between mt-4">
              <select value={fontFamily} onChange={e => setFontFamily(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="font-sans">Sans</option>
                <option value="font-serif">Serif</option>
                <option value="font-mono">Mono</option>
                <option value="font-cursive">Cursive</option>
                <option value="font-fantasy">Fantasy</option>
                <option value="font-system-ui">System UI</option>
                <option value="Great Vibes">Great Vibes</option>
                <option value="Pacifico">Pacifico</option>
                <option value="Playfair Display">Playfair Display</option>
              </select>
            </div>
            <div className="flex justify-between mt-4 ">
              <select value={fontSize} onChange={e => setFontSize(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="xs">Extra Small</option>
                <option value="base">Small</option>
                <option value="lg">Base</option>
                <option value="3xl">Large</option>
                <option value="5xl">Extra Large</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={() => setIsBold(!isBold)} className={`bgblueden hover:bg-gray-900 mr-2 text-white font-bold py-2 px-4 rounded ${isBold ? 'bg-blue-500' : ''}`}>
              <FaBold />
            </button>
            <button onClick={() => setIsItalic(!isItalic)} className={`bgblueden hover:bg-gray-900 text-white font-bold py-2 px-4 rounded ${isItalic ? 'bg-blue-500' : ''}`}>
              <FaItalic />
            </button>
          </div>
          <button onClick={addText} className='self-end bgblueden text-white mr-4 p-2 rouned'>
            Add text
          </button>
        </div>
      }
      <div className="w-full md:w-2/5 px-6 mt-10 mb-4 md:mb-0">
        <h2 className="text-xl font-bold mb-4">Customization Options</h2>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Color</h3>
          <div className="flex space-x-2">
            {Object.keys(images).map((clr) => (
              <button
                key={clr}
                onClick={() => setColor(clr)}
                className={`w-8 border-2 border-black h-8 rounded-full ${color === clr ? 'ring-2 ring-blue-500' : ''}`}
                style={{ backgroundColor: clr.toLowerCase() }}
              ></button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Side</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsFront(true)}
              className={`px-4 py-2 rounded ${isFront ? 'bgblueden text-white' : 'bg-gray-200'}`}
            >
              Front
            </button>
            <button
              onClick={() => setIsFront(false)}
              className={`px-4 py-2 rounded ${!isFront ? 'bgblueden text-white' : 'bg-gray-200'}`}
            >
              Back
            </button>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Size</h3>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full p-2 border rounded"
          >
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
          <h3 className="font-semibold mb-2">Add Elements</h3>
        <div className="mb-4 ">
          <button
            onClick={() => setShowTextInputDialog(true)}
            className="w-full p-2 mb-2 bg-orange-400 hover:bg-orange-500 text-white gap-3 rounded"
          >
            Add Text
          </button>
          <label className="bg-gray-500 hover:cursor-pointer block hover:bg-gray-700 text-white w-full p-2 text-center rounded">
            Add Image
            <input
              type="file"
              accept="image/*"
              onChange={addImage}
              className="hidden"
            />
          </label>
        </div>
        <button
          onClick={exportDesign}
          className="w-full p-2 mt-4 bg-orange-500 hover:bg-orange-700 text-white rounded"
        >
          Save Design and Purchase
        </button>
      </div>
      <div className="w-full md:w-3/5 relative" id="design-canvas" onClick={handleDeselect}>
        <div className="relative w-full h-[100vh]" ref={containerRef}>
          <img
            src={images[color][isFront ? 'front' : 'back']}
            alt={`${color} t-shirt ${isFront ? 'front' : 'back'}`}
            className="w-full max-h-full object-contain"
          />
          {currentElements.map((element) => (
            <div
              key={element.id}
              id={`element-${element.id}`}
              style={{
                position: 'absolute',
                left: `${element.x}px`,
                top: `${element.y}px`,
                width: `${element.width}px`,
                height: `${element.height}px`,
                transform: `rotate(${element.rotation}deg)`,
                cursor: 'pointer',
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedId(element.id);
              }}
            >
              {element.type === 'text' ? (
                <p className={`${element.textColor} ${element.isBold ? 'font-bold' : ''} ${element.isItalic ? 'italic' : ''} ${element.fontFamily} text-${element.fontSize}`}>{element.content}</p>
              ) : (
                <img src={element.content} alt="User uploaded" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              )}
            </div>
          ))}
          <Moveable
            target={selectedId ? document.querySelector(`#element-${selectedId}`) : null}
            draggable={true}
            resizable={true}
            rotatable={true}
            bounds={getBounds()}
            onDrag={({ target, left, top }) => {
              const { x, y } = keepElementInBounds(left, top, target.offsetWidth, target.offsetHeight);
              updateElement(selectedId, { x, y });
            }}
            onResize={({ target, width, height, drag }) => {
              const { left, top } = drag.beforeTranslate;
              const { x, y } = keepElementInBounds(left, top, width, height);
              updateElement(selectedId, { width, height, x, y });
            }}
            onRotate={({ target, beforeRotate }) => {
              updateElement(selectedId, { rotation: beforeRotate });
            }}
          />
        </div>
      </div>
    </div>
  </div>
    
  );
}

export default Customization;
