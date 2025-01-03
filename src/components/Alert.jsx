const Alert = ({ type, text }) => {
    return (
      <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
        <div
          className={`p-3 ${
            type === "danger" ? "bg-red-800" : "bg-blue-800"
          } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex shadow-lg transform transition-all duration-300 hover:scale-105 font-jakarta`}
          role='alert'
        >
          <p
            className={`flex rounded-full ${
              type === "danger" ? "bg-red-500" : "bg-blue-500"
            } uppercase px-3 py-1 text-xs font-grotesk font-bold mr-3`}
          >
            {type === "danger" ? "Error" : "Success"}
          </p>
          <p className='mr-2 text-left font-jakarta font-semibold'>{text}</p>
        </div>
      </div>
    );
  };
  
  export default Alert;
  