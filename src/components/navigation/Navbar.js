import { connect } from "react-redux";
import { Link } from "react-router-dom";
import boomslag from "../../assets/img/boomslag-black.png";
import loading from "../../assets/img/loading.gif";

function Navbar() {
  return (
    <nav className="w-full py-4 shadow-md fixed">
      <div className="bg-white px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap px-14">
          <div className="ml-4 mt-2">
            <img src={boomslag} width={140} height={120} />
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <Link
              to="/casos"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:underline hover:underline-offset-4"
            >
              Casos
            </Link>
            <Link
              to="/servicios"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:underline hover:underline-offset-4"
            >
              Servicios
            </Link>
            <Link
              to="/nosotros"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:underline hover:underline-offset-4"
            >
              Nosotros
            </Link>
            <Link
              to="/carreras"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:underline hover:underline-offset-4"
            >
              Carreras
            </Link>
            <Link
              to="/blog"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:underline hover:underline-offset-4"
            >
              Blog
            </Link>
            <Link
              to="/contacto"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:underline hover:underline-offset-4"
            >
              contacto
            </Link>
            <button
              type="button"
              className=" ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-6 py-4 text-md font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Hire us
              <img src={loading} className="w-7 h-2 mt-1 ml-2"/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
