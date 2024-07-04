/*import React, { useState } from 'react';
import { FaFileWord } from 'react-icons/fa6';
import axios from 'axios';

function Home() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [convert, setConvert] = useState("");
    const [downloadError, setDownloadError] = useState("");

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            setConvert("");
            setDownloadError("Please select a file");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await axios.post("http://localhost:3000/convertFile", formData, {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute("download", selectedFile.name.replace(/\.[^/.]+$/, "") + ".pdf");
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            setSelectedFile(null);
            setDownloadError("");
            setConvert("File converted successfully");
        } catch (error) {
            console.error('Error occurred during file conversion:', error);
            if (error.response && error.response.status === 400) {
                setDownloadError(`Error Occurred: ${error.response.data.message}`);
            } else {
                setConvert("");
                setDownloadError("Error converting file");
            }
        }
    };

    return (
        <>
            <div className='min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center'>
                <div className='bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 p-8 rounded-lg shadow-lg max-w-lg w-full mx-4 md:mx-8 lg:mx-12'>
                    <div className='text-center mb-6'>
                        <h1 className='text-4xl font-extrabold text-white mb-2'>
                            Convert Word To PDF
                        </h1>
                        <p className='text-white text-lg'>
                            Easily convert Word documents to PDF format online, without having to install any software.
                        </p>
                    </div>
                    <div className='flex flex-col items-center space-y-4'>
                        <input
                            type="file"
                            accept=".doc,.docx"
                            onChange={handleFileChange}
                            className='hidden'
                            id="FileInput"
                        />
                        <label
                            htmlFor="FileInput"
                            className="w-full max-w-md flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white border border-purple-500 rounded-lg shadow-md cursor-pointer hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-opacity duration-300"
                        >
                            <FaFileWord className='text-4xl mr-4' />
                            <span className='text-xl'>{selectedFile ? selectedFile.name : "Choose File"}</span>
                        </label>
                        <button
                            onClick={handleSubmit}
                            disabled={!selectedFile}
                            className={`mt-6 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${selectedFile ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-400 cursor-not-allowed text-gray-200'}`}
                        >
                            Convert File
                        </button>
                        {convert && (
                            <div className='text-green-500 text-center mt-4'>
                                {convert}
                            </div>
                        )}
                        {downloadError && (
                            <div className='text-red-500 text-center mt-2'>
                                {downloadError}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;*//*
import React, { useState } from 'react';
import { FaFileWord } from 'react-icons/fa6';
import axios from 'axios';

function Home() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [convert, setConvert] = useState("");
    const [downloadError, setDownloadError] = useState("");

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            setConvert("");
            setDownloadError("Please select a file");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await axios.post("http://localhost:3000/convertFile", formData, {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute("download", selectedFile.name.replace(/\.[^/.]+$/, "") + ".pdf");
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            setSelectedFile(null);
            setDownloadError("");
            setConvert("File converted successfully");
        } catch (error) {
            console.error('Error occurred during file conversion:', error);
            if (error.response && error.response.status === 400) {
                setDownloadError(`Error Occurred: ${error.response.data.message}`);
            } else {
                setConvert("");
                setDownloadError("Error converting file");
            }
        }
    };

    return (
        <>
            <div className='min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center'>
                <div className='bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 p-8 rounded-lg shadow-lg max-w-lg w-full mx-4 md:mx-8 lg:mx-12'>
                    <div className='text-center mb-6'>
                        <h1 className='text-4xl font-extrabold text-gray-900 mb-2'>
                            Convert Word To PDF
                        </h1>
                        <p className='text-gray-800 text-lg'>
                            Easily convert Word documents to PDF format online, without having to install any software.
                        </p>
                    </div>
                    <div className='flex flex-col items-center space-y-4'>
                        <input
                            type="file"
                            accept=".doc,.docx"
                            onChange={handleFileChange}
                            className='hidden'
                            id="FileInput"
                        />
                        <label
                            htmlFor="FileInput"
                            className="w-full max-w-md flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white border border-purple-500 rounded-lg shadow-md cursor-pointer hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-opacity duration-300"
                        >
                            <FaFileWord className='text-4xl mr-4' />
                            <span className='text-xl'>{selectedFile ? selectedFile.name : "Choose File"}</span>
                        </label>
                        <button
                            onClick={handleSubmit}
                            disabled={!selectedFile}
                            className={`mt-6 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${selectedFile ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-400 cursor-not-allowed text-gray-200'}`}
                        >
                            Convert File
                        </button>
                        {convert && (
                            <div className='text-green-700 text-center mt-4'>
                                {convert}
                            </div>
                        )}
                        {downloadError && (
                            <div className='text-red-500 text-center mt-2'>
                                {downloadError}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;*/
/*import React, { useState } from 'react';
import { FaFileWord } from 'react-icons/fa6';
import axios from 'axios';

function Home() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [convert, setConvert] = useState("");
    const [downloadError, setDownloadError] = useState("");

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            setConvert("");
            setDownloadError("Please select a file");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {                                   // API Jo sara kaam kam raha tha 

            const response = await axios.post("http://localhost:3000/convertFile", formData, {
                responseType: 'blob',
            });
            console.log(responce.data);
            const url = window.URL.createObjectURL(new Blob([response.data]));
            console.log(url);
            const link = document.createElement('a');
            console.log(link);
            link.href = url;
            link.setAttribute("download", selectedFile.name.replace(/\.[^/.]+$/, "") + ".pdf");
            console.log(link);
            document.body.appendChild(link);
            console.log(link);
            link.click();
            link.parentNode.removeChild(link);
            setSelectedFile(null);
            setDownloadError("");
            setConvert("File converted successfully");
        } catch (error) {
            console.error('Error occurred during file conversion:', error);
            if (error.response && error.response.status === 400) {
                setDownloadError(`Error Occurred: ${error.response.data.message}`);
            } else {
                setConvert("");
                setDownloadError("Error converting file");
            }
        }
    };

    return (
        <>
            <div className='min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center'>
                <div className='bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 p-8 rounded-lg shadow-lg max-w-lg w-full mx-4 md:mx-8 lg:mx-12'>
                    <div className='text-center mb-6'>
                        <h1 className='text-4xl font-extrabold text-gray-900 mb-2'>
                            Convert Word To PDF
                        </h1>
                        <p className='text-gray-800 text-lg'>
                            Easily convert Word documents to PDF format online, without having to install any software.
                        </p>
                    </div>
                    <div className='flex flex-col items-center space-y-4'>
                        <input
                            type="file"
                            accept=".doc,.docx"
                            onChange={handleFileChange}
                            className='hidden'
                            id="FileInput"
                        />
                        <label
                            htmlFor="FileInput"
                            className="w-full max-w-md flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white border border-purple-500 rounded-lg shadow-md cursor-pointer hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-opacity duration-300"
                        >
                            <FaFileWord className='text-4xl mr-4' />
                            <span className='text-xl'>{selectedFile ? selectedFile.name : "Choose File"}</span>
                        </label>
                        <button
                            onClick={handleSubmit}
                            disabled={!selectedFile}
                            className={`mt-6 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${selectedFile ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-400 cursor-not-allowed text-gray-200'}`}
                        >
                            Convert File
                        </button>
                        {convert && (
                            <div className='text-green-700 text-center mt-4'>
                                {convert}
                            </div>
                        )}
                        {downloadError && (
                            <div className='text-red-500 text-center mt-2'>
                                {downloadError}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;*/
import React, { useState } from 'react';
import { FaFileWord } from 'react-icons/fa6';
import axios from 'axios';

function Home() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [convert, setConvert] = useState("");
    const [downloadError, setDownloadError] = useState("");

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            setConvert("");
            setDownloadError("Please select a file");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await axios.post("http://localhost:3000/convertFile", formData, {
                responseType: 'blob',
            });
            
            console.log(response.data);
            const url = window.URL.createObjectURL(new Blob([response.data]));
            console.log(url);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute("download", selectedFile.name.replace(/\.[^/.]+$/, "") + ".pdf");
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);

            setSelectedFile(null);
            setDownloadError("");
            setConvert("File converted successfully");
        } catch (error) {
            console.error('Error occurred during file conversion:', error);
            if (error.response && error.response.status === 400) {
                setDownloadError(`Error Occurred: ${error.response.data.message}`);
            } else {
                setConvert("");
                setDownloadError("Error converting file");
            }
        }
    };

    return (
        <>
            <div className='min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center'>
                <div className='bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 p-8 rounded-lg shadow-lg max-w-lg w-full mx-4 md:mx-8 lg:mx-12'>
                    <div className='text-center mb-6'>
                        <h1 className='text-4xl font-extrabold text-gray-900 mb-2'>
                            Convert Word To PDF
                        </h1>
                        <p className='text-gray-800 text-lg'>
                            Easily convert Word documents to PDF format online, without having to install any software.
                        </p>
                    </div>
                    <div className='flex flex-col items-center space-y-4'>
                        <input
                            type="file"
                            accept=".doc,.docx"
                            onChange={handleFileChange}
                            className='hidden'
                            id="FileInput"
                        />
                        <label
                            htmlFor="FileInput"
                            className="w-full max-w-md flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white border border-purple-500 rounded-lg shadow-md cursor-pointer hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-opacity duration-300"
                        >
                            <FaFileWord className='text-4xl mr-4' />
                            <span className='text-xl'>{selectedFile ? selectedFile.name : "Choose File"}</span>
                        </label>
                        <button
                            onClick={handleSubmit}
                            disabled={!selectedFile}
                            className={`mt-6 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${selectedFile ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-400 cursor-not-allowed text-gray-200'}`}
                        >
                            Convert File
                        </button>
                        {convert && (
                            <div className='text-indigo-800 text-xl text-center mt-4'>
                                {convert}
                            </div>
                        )}
                        {downloadError && (
                            <div className='text-red-500 text-center mt-2'>
                                {downloadError}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;



