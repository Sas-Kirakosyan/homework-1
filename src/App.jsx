import Section from "./components/section";
// TODO buttonsTitle need to change buttonsTitles (hognaki lini, @ndhanur lav er)
function Page() {
  const contents = [
    {
        title: "1",
        buttonsTitle: ["Schedule", "Summary", "Recent List"]
    },
    {
        title: "2",
        buttonsTitle: ["Child Component", "Child Component", "Child Component"]
    },
    {
        title: "3",
        buttonsTitle: ["<Schedule>", "<Summary>", "<recent list>"]
    }
  ];
  return (
    <>
      <h1>From Design To Implementation</h1>
      <div id="main">
    
      {contents.map((item) => (
        <Section key={item.title} item={item} /> 
      ))}
      </div>     
    </>
  );
}

export default Page;
