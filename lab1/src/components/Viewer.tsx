interface Props {
  city: string
  selectedIndex: number
}

function Viewer({city, selectedIndex}: Props) {
  if (selectedIndex != -1) {
    return <p>`{city}`</p>
  }
  return <p>There are no cities selected</p>;
}

export default Viewer;
