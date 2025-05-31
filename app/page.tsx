import Table from "@/features/table/components/Table";
import mockData from "@/features/table/constants/data.json";

const Home = () => {
  return (
    <div>
      <Table initialData={mockData} />
    </div>
  );
};

export default Home;
