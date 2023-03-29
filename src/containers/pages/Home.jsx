import { Footer } from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";

export const Home = () => {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <h1>Home</h1>
      </div>
      <Footer />
    </Layout>
  );
};
