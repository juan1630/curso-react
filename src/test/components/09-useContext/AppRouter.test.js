const { shallow } = require("enzyme")
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContex } from '../../../components/09-useContext/UserContext'

describe('pruebas en el AppRouter', () => {


    const user ={
        name:"Juan",
        email: "josejuan@gmail.com"
    }
   

    const wrapper = shallow(
    
        <UserContex.Provider  value={{
            user
        }} >
            <AppRouter/>

        </UserContex.Provider>
    
    
    )

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
})
