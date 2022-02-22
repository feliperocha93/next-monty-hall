class DoorModel {
  #number: number
  #hasGift: boolean
  #isSelected: boolean
  #isOpened: boolean

  constructor(
    number: number,
    hasGift = false,
    isSelected = false,
    isOpened = false
  ) {
    this.#number = number;
    this.#hasGift = hasGift;
    this.#isSelected = isSelected;
    this.#isOpened = isOpened;
  }

  get number() {
    return this.#number;
  }

  get hasGift() {
    return this.#hasGift;
  }

  get isSelected() {
    return this.#isSelected;
  }

  get isOpened() {
    return this.#isOpened;
  }

  get isClosed() {
    return !this.#isOpened;
  }

  removeSelect() {
    const isSelected = false;
    return new DoorModel(
      this.number,
      this.hasGift,
      isSelected,
      this.isOpened
    );
  }

  changeIsSelected() {
    const isSelected = !this.isSelected;
    return new DoorModel(
      this.number,
      this.hasGift,
      isSelected,
      this.isOpened
    );
  }

  open() {
    const isOpened = true;
    return new DoorModel(
      this.number,
      this.hasGift,
      this.isSelected,
      isOpened
    );
  }
}
  

export default DoorModel;