import { fireEvent, render, screen } from "@testing-library/react";
import SavedList from "../components/SavedList";
import { LikesContext } from "../contexts/Likes";

const mockLikesWithItems = {
  123: {
    name: "Llama",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_Llama.jpg",
  },
  456: {
    name: "Ring-tailed Lemur",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Ring-tailed_lemur_%28Lemur_catta%29.jpg",
  },
};

const likeContext = {
  likes: {},
  likeItem: jest.fn(),
  removeItems: jest.fn(),
};

const renderListComponent = () => {
  return render(
    <LikesContext.Provider
      value={{ likes: mockLikesWithItems }}
    >
      <SavedList />
    </LikesContext.Provider>
  )
};

describe("given the SavedList component is rendered", () => {
  describe("when multiple liked items exist", () => {
    it("then should contain multiple items with images and checkboxes, and the remove button should be disabled", () => {
      renderListComponent(mockLikesWithItems);
      expect(screen.getByRole("img", { name: "Llama" })).toBeInTheDocument();
      expect(screen.getByRole("img", { name: "Ring-tailed Lemur" })).toBeInTheDocument();
      expect(screen.getAllByRole("img")).toHaveLength(2);
      expect(screen.getAllByRole("checkbox")).toHaveLength(2);
      expect(screen.getByRole("button", { name: "Remove"})).toBeDisabled();
    });

    describe("and the a checkbox for an item is selected", () => {
      describe("and the remove button is clicked", () => {
        it("then should call the removeItems function", () => {});
      });
    });
  });

  describe("when no liked items are stored", () => {
    it("then should not contain a heading, and should not contain items", () => {});
  });
});
