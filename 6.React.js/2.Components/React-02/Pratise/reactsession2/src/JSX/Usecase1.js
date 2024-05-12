import logo from '../Asset/download.png'

function Usecase1() {
    const ele1 = <h1>Skill Academy</h1>
    const ele8 = <img src={logo} alt='Logo' height={100}/>
    const ele2 = <p>Paragraph</p>
    const ele3 = <input type="text" placeholder="@exmaple:Jhon Doe"/>
    const ele4 = <input type="password" placeholder="@example:JhonDoe123@..."/>
    const ele5 = <p>Name:</p>
    const ele6 = <p className="mt-3">Password:</p>
    const ele7 = <button className="bg-dark text-warning">Login</button>
    return (
    <>
    <h1 className="d-flex align-content-lg-center justify-content-center text-primary"> {ele8} Welcome to &nbsp; {ele1}</h1> {ele2} {ele5} {ele3} {ele6} {ele4} <br/> <br/>  {ele7}
    </>

    );
}

export default Usecase1;