import { GridLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loader({ loading = true, color = "#019ee2" }) {
  return (
    <div className="sweet-loading">
      <GridLoader
        color={color}
        loading={loading}
        cssOverride={override}
        // size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
