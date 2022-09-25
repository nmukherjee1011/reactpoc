function MainComponent() {
    return (
        <nav>
            <h1>Test MainComponent</h1>
            <ul>
                <li>First Component</li>
                <li>Second Component</li>
            </ul>
        </nav>
    )
}
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<MainComponent></MainComponent>);
