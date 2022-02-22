import DoorModel from "../model/DoorModel";

export function createDoors(q: number, withGift: number): DoorModel[] {
  return Array.from({ length: q }, (_, i) => {
    const number = i + 1;
    const hasGift = number === withGift;
    return new DoorModel(number, hasGift);
  })
}

export function updateDoors(doors: DoorModel[], doorUpdated: DoorModel): DoorModel[] {
  return doors.map(d => {
    if (d.number === doorUpdated.number) {
      return doorUpdated;
    } else {
      return doorUpdated.isOpened ? d : d.removeSelect();
    }
  });
}