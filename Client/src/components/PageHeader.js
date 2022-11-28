// header component changes based on page & the nav
// pass the headings text content as props
// nest the nav
// import NavTabs from "./NavTabs";

function PageHeader(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      {/*<NavTabs />*/}
    </div>
  );
}

export default PageHeader;
