const container = document.getElementById('react-container');
ReactDOM.render("Hello! Welcome to React",container);
// Functional component
const Container = () =>{
    return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
       React.createElement(`div`,null,`Let's rock and roll`)
       );
}
// Render the Container
ReactDOM.render(React.createElement(Container),container);


