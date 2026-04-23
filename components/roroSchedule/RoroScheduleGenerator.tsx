import parse from 'html-react-parser';

//Redeployment - Paolo Nov 28th
//Redeployment - Nov 28th 9:42 AM

const RoroData = [
  {
    id: 'fremnz',
    heading: 'Fremantle To NZ',
    tableColHeaders: [
      'Vessel',
      'Departure: Fremantle',
      'Arrival: Auckland',
      'Arrival: Wellington',
      'Arrival: Lyttelton',
      'Arrival: Nelson',
    ],
    rows: [
      "Liberty Ace (MOL),10-May,27-May,TBA,TBA,N/A","Eternal Ace (MOL),13-May,30-May,TBA,TBA,N/A",
    ]
  },
  {
    id: 'adelnz',
    heading: 'Adelaide to New Zealand',
    tableColHeaders: [
      'Vessel',
      'Departure: Adelaide',
      'Arrival: Auckland',
      'Arrival: Wellington',
      'Arrival: Lyttelton',
      'Arrival: Nelson',
    ],
    rows: [
    "Genuine Ace (MOL),01-May,12-May,20-May,21-May,N/A","Liberty Ace (MOL),14-May,27-May,TBA,TBA,N/A","Etermal Ace (MOL),17-May,30-May,TBA,TBA,N/A","",
    ]
  },
  {
    id: 'melbnz',
    heading: 'Melbourne to New Zealand',
    tableColHeaders: [
      'Vessel',
      'Departure: Melbourne',
      'Arrival: Auckland',
      'Arrival: Wellington',
      'Arrival: Lyttelton',
      'Arrival: Nelson',
    ],
    rows: [
    "Genuine Ace (MOL),03-May,12-May,07-May,08-May,N/A","Trans Future 7 (Trans Future),09-May,14-May,22-May,20-May,23-May","Liberty Ace (MOL),16-May,27-May,TBA,TBA,N/A","Orchid Ace (MOL),17-May,26-May,TBA,TBA,N/A","Eternal Ace (MOL),19-May,30-May,TBA,TBA,N/A","Trans Future 6 (Trans Future),30-May,04-June,18-June,16-June,06-June","Trans Future 5 (Trans Future),13-June,18-June,TBA,TBA,TBA","",
      ]
  },
  {
    id: 'portkemnz',
    heading: 'Port Kembla To NZ',
    tableColHeaders: [
      'Vessel',
      'Departure: Port Kembla',
      'Arrival: Auckland',
      'Arrival: Wellington',
      'Arrival: Lyttelton',
      'Arrival: Nelson',
    ],
    rows: [
    "Genuine Ace (MOL),05-May,12-May,20-May,21-May,N/A","Trans Future 7 (Trans Future),07-May,14-May,22-May,20-May,23-May","Orchid ace (MOL),18-May,26-May,TBA,TBA,N/A","Liberty Ace (MOL),19-May,27-May,TBA,TBA,N/A","Eternal Ace (MOL),25-May,30-May,TBA,TBA,N/A","Trans Future 6 (Trans Future),28-May,04-June,18-June,16-June,06-June","Trans Future 5 (MOL),11-June,18-June,TBA,TBA,TBA",
    ]
  },
  {
    id: 'brisnz',
    heading: 'Brisbane to New Zealand',
    tableColHeaders: [
      'Vessel',
      'Departure: Brisbane',
      'Arrival: Auckland',
      'Arrival: Wellington',
      'Arrival: Lyttelton',
      'Arrival: Nelson',
    ],
    rows: [
    "Trans Future 7 (Trans Future),05-May,14-May,22-May,20-May,23-May","Genuine Ace (MOL),07-May,12-May,20-May,21-May,N/A","Liberty Ace (MOL),22-May,27-May,TBA,TBA,N/A","Eternal Ace (MOL),25-May,30-May,TBA,TBA,N/A","Trans Future 6 (Trans Future),26-May,04-June,18-June,16-June,06-June","Trans Future 5 (Trans Future),09-June,18-June,TBA,TBA,TBA","",
    ]
  },
];

const RoroScheduleGenerator = () => {
  return (
    <section className="w-full flex flex-col items-center gap-20 py-8">
      {
        RoroData.map((route, i) => ( //map routes
          <div id={route.id} key={i} className='w-full min-w-xl max-w-5xl shadow-lg py-12 px-4 sm:px-12 flex flex-col items-start'>
            <h2 className="text-3xl text-darkBlue font-medium pb-8">
              {route.heading}
            </h2>
            <div className="w-full overflow-x-scroll">

            <table className="w-full border border-b-divideBorder">
              <tbody className="divide-y divide-divideBorder">
                <tr className="bg-darkBlue text-white font-medium">
                  {route.tableColHeaders.map((heading, j) => (
                    <th key={j} className='py-8'>
                      {heading}
                    </th>
                  ))}
                </tr>
                {route.rows.map((row, k) => (
                  <tr key={k} className={`${k % 2 === 0 ? 'bg-white' : 'bg-nearlyWhite'}`}>
                    {row.split(',').map((cell, l) => (
                      <td key={l} className='text-center py-2 min-w-roro'>
                        {parse(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            </div>

            <h3 className="text-xl text-darkBlue font-medium p-4">
              Showing 1 - {route.rows.length} of {route.rows.length} entries
            </h3>
          </div>
        ))
      }
    </section>
  );
};

export default RoroScheduleGenerator;