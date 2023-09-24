const CategoryList = () => {
  return (
    <div>
      <h2 className="text-3xl text-center">Jobs Category lists</h2>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex gap-2 justify-center mt-4">
        <div className="bg-green-100 p-4">
          <img className="mt-4" src="/assets/icons/accounts.png" alt="" />
          <h1 className="py-2 font-bold">Account & Finance</h1>
          <p>300 Jobs Available</p>
        </div>
        <div className="bg-green-100 p-4">
          <img className="mt-4" src="/assets/icons/accounts.png" alt="" />
          <h1 className="py-2">Account & Finance</h1>
          <p>300 Jobs Available</p>
        </div>
        <div className="bg-green-100 p-4">
          <img className="mt-4" src="/assets/icons/accounts.png" alt="" />
          <h1 className="py-2">Account & Finance</h1>
          <p>300 Jobs Available</p>
        </div>
        <div className="bg-green-100 p-4">
          <img className="mt-4" src="/assets/icons/accounts.png" alt="" />
          <h1 className="py-2">Account & Finance</h1>
          <p>300 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
