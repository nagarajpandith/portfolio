const Warning = ({ onContinue }) => {
  return (
    <section
    className="h-screen w-screen flex justify-center items-center px-5"
    >
      <div className="rounded-lg max-w-xl bg-red-100 py-5 px-6 text-base text-red-700">
      The information here was last updated on <span
      className="font-bold"
      >August 3, 2022</span> and might be outdated. 
      The newer version is under construction. 
      Would you still like to continue browsing the older version?
      <div>
      <button 
      className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={()=>onContinue()}>Yes</button>
      </div>
    </div>
    </section>
  );
};

export default Warning;
