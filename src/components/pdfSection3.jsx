import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUpload, 
  faFilePdf, 
  faEye, 
  faTrash, 
  faCheckCircle, 
  faCloudUploadAlt,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

function App() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [allFiles, setAllFiles] = useState([]);
  const [pdfFile, setPdfFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-files");
      setAllFiles(result.data.data);
    } catch (err) {
      setError("Failed to load files");
      console.error("Error fetching files:", err);
    }
  };

  const submitFile = async (e) => {
    e.preventDefault();
    if (!title || !file) {
      setError("Please enter a title and select a file");
      return;
    }
    
    setIsUploading(true);
    setError("");
    
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("file", file);
      
      const result = await axios.post(
        "http://localhost:5000/upload-files",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      
      if (result.data.status === "ok") {
        setUploadSuccess(true);
        getFiles();
        setTitle("");
        setFile(null);
        
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    } catch (err) {
      setError("Upload failed. Please try again.");
      console.error("Upload error:", err);
    } finally {
      setIsUploading(false);
    }
  };

  const showPdf = (pdf) => {
    setPdfFile(`http://localhost:5000/files/${pdf}`);
    setPreviewMode(true);
  };

  const deleteFile = async (id, fileName) => {
    if (!window.confirm("Are you sure you want to delete this file?")) return;
    
    try {
      await axios.delete(`http://localhost:5000/delete-file/${id}`);
      await axios.delete(`http://localhost:5000/files/${fileName}`);
      getFiles();
      
      if (pdfFile && pdfFile.includes(fileName)) {
        setPdfFile(null);
        setPreviewMode(false);
      }
    } catch (err) {
      setError("Delete failed. Please try again.");
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12 px-4 shadow-xl">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FontAwesomeIcon icon={faFilePdf} className="text-4xl text-white" />
            <h1 className="text-4xl font-bold">PDF Manager Pro</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Upload, manage, and preview your PDF documents with our premium solution
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                <FontAwesomeIcon icon={faUpload} />
                <span>Upload PDF</span>
              </h2>
            </div>
            
            <div className="p-6">
              {uploadSuccess && (
                <div className="mb-6 p-3 bg-green-50 text-green-700 rounded-lg flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>File uploaded successfully!</span>
                </div>
              )}
              
              {error && (
                <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg">
                  {error}
                </div>
              )}
              
              <form onSubmit={submitFile}>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Document Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter document title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Select PDF File
                  </label>
                  
                  <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-all 
                    ${file ? 'border-indigo-400 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'}`}>
                    <input
                      type="file"
                      className="hidden"
                      id="file-upload"
                      accept="application/pdf"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    
                    {file ? (
                      <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faFilePdf} className="text-5xl text-red-500 mb-3" />
                        <p className="font-medium text-gray-800">{file.name}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                        <button 
                          type="button"
                          className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
                          onClick={() => setFile(null)}
                        >
                          Change File
                        </button>
                      </div>
                    ) : (
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <FontAwesomeIcon icon={faCloudUploadAlt} className="text-5xl text-indigo-400 mb-4" />
                        <p className="font-medium text-gray-700">Drag & drop your file here</p>
                        <p className="text-gray-500 my-2">or</p>
                        <div className="inline-block bg-indigo-100 text-indigo-700 font-medium px-6 py-2 rounded-lg hover:bg-indigo-200 transition-colors">
                          Browse Files
                        </div>
                        <p className="text-gray-500 text-sm mt-4">PDF files only (max 10MB)</p>
                      </label>
                    )}
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className={`w-full py-3 px-4 rounded-lg font-bold text-white transition-all
                    ${isUploading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl'}`}
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : 'Upload Document'}
                </button>
              </form>
            </div>
          </div>
          
          {/* Files Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Your Documents</h2>
            </div>
            
            <div className="p-6">
              {allFiles.length === 0 ? (
                <div className="py-12 text-center">
                  <FontAwesomeIcon icon={faFilePdf} className="text-6xl text-gray-300 mb-4" />
                  <h3 className="text-xl font-medium text-gray-500">No documents uploaded yet</h3>
                  <p className="text-gray-500 mt-2">Upload your first PDF to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {allFiles.map((data) => (
                    <div key={data._id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center">
                          <FontAwesomeIcon icon={faFilePdf} className="text-xl text-red-500" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{data.title}</h3>
                          <p className="text-sm text-gray-500">
                            Uploaded: {new Date(data.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => showPdf(data.pdf)}
                          className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-200 transition-colors"
                        >
                          <FontAwesomeIcon icon={faEye} />
                          <span>Preview</span>
                        </button>
                        <button 
                          onClick={() => deleteFile(data._id, data.pdf)}
                          className="bg-red-100 text-red-600 px-3 py-2 rounded-lg hover:bg-red-200 transition-colors"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {previewMode && pdfFile && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">PDF Preview</h2>
              <button 
                onClick={() => setPreviewMode(false)}
                className="text-white hover:text-gray-200 text-xl"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            <div className="flex-1 overflow-auto p-4 bg-gray-100">
              <div className="flex items-center justify-center min-h-[300px]">
                <div className="text-center py-12">
                  <FontAwesomeIcon icon={faFilePdf} className="text-6xl text-red-500 mb-4" />
                  <p className="text-xl font-medium text-gray-700">PDF Preview</p>
                  <p className="text-gray-600 mt-2">
                    For a complete PDF viewing experience, we recommend downloading the file
                  </p>
                  <a 
                    href={pdfFile} 
                    download
                    className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">PDF ready for download</span>
                <a 
                  href={pdfFile} 
                  download
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg font-medium">PDF Manager Pro © {new Date().getFullYear()}</p>
          <p className="text-gray-400 mt-2">Secure PDF storage and management solution</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;