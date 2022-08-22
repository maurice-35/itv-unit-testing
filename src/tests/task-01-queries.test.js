import { render, screen, within } from "@testing-library/react";
import InfoTile from "../components/InfoTile";


const infoTileMock = {
  name: "Llama",
  image_link: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_Llama.jpg",
  latin_name: "Lama glama",
  animal_type: "Mammal",
  active_time: "Diurnal",
  habitat: "High plateau",
};

const renderComponent = () => render(<InfoTile {...infoTileMock} />);

describe("given the InfoTile component is rendered", () => {
  it("then should contain a title", () => {
    renderComponent()
    expect(screen.getByRole("heading", { name: infoTileMock.latinName })).toBeInTheDocument()
  });

  it("then should contain an image with the expect alt text and source", () => {
    renderComponent()
    expect(screen.getByRole("img", { name: infoTileMock.alt })).toBeInTheDocumet;
  });

  it("then should contain all 4 bullet points with expected text in the correct order", () => {
    renderComponent()
    const list = screen.getByRole("list");
    const items = screen.getAllByRole("listitem")
    expect(items[0]).toHaveTextContent(infoTileMock.latin_name);
    expect(items[1]).toHaveTextContent(infoTileMock.animal_type);
    expect(items[2]).toHaveTextContent(infoTileMock.active_time);
    expect(items[3]).toHaveTextContent(infoTileMock.habitat);
  });
});
