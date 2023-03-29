import { Footer } from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";

export const Contact = () => {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <h1>Contact</h1>
      </div>
      <Footer />
    </Layout>
  );
};
