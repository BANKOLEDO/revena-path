const companies = [
    {
        logo: '/assets/companies/nimbus.png',
        name: 'NIMBUS CONSUMER GOODS',
    },
    {
        logo: '/assets/companies/vertex.png',
        name: 'VERTEX RETAIL GROUP',
    },
    {
        logo: '/assets/companies/bluecrate.png',
        name: 'BLUECRATE SUPPLY',
    },
    {
        logo: '/assets/companies/atlas.png',
        name: 'ATLAS MERCH CO.',
    },
    {
        logo: '/assets/companies/primewholesale.png',
        name: 'PRIMEWHOLESALE',
    },
    {
        logo: '/assets/companies/linea.png',
        name: 'LINEA DISTRIBUTION',
    }
];

const RetailSupport = () => {
  const colors = [
    "border-blue-600",
    "border-indigo-600",
    "border-blue-600",
    "border-indigo-600",
    "border-blue-600",
    "border-indigo-600",
  ];

  return (
        <section className="max-w-7xl 2xl:mx-auto m-6 p-5 border border-gray-700 rounded-lg">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white">RETAIL SUPPORT</h2>
        <p className="text-blue-300 mt-2">
          Trusted by forward-thinking retail and distribution teams.
        </p>
      </div>

      <div className="grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className={`${
              colors[index % colors.length]
            } flex flex-col items-center text-blue-950 bg-white border-2 p-2 rounded-lg shadow-lg transition hover:scale-[1.02]`}
          >
            <img src={company.logo} className="w-36" />
            <button className="border-2 rounded-md p-2 text-sm font-bold">
                <p>See How We Support <span className="block sm:inline">{company.name}</span></p>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RetailSupport;
