import  { getUsers, getUsersById } from '../user.js';

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

describe('Test Users', () => {    
    it('Obtener lista usuarios', async () => {
        const url = 'https://www.alexis.com/users/';
        const users = await getUsers(url);
        expect(users.length).toBeGreaterThan(0);
    });

    it('Obtener lista de usuarios con promesa', done => {
        const url = 'https://www.alexis.com/users/';
        getUsers(url).then(result => {
            expect(result.length).toBeGreaterThan(0);
        });
        done();
    });

    it('Obtener un usuario', () => {
        const url = 'https://www.alexis.com/users/';
        return getUsersById(url, 1).then(result => {
            expect(result.id).toBe(1);
        });
    });

    it('Obtener un error cuando el usuario no se encuentra', async () => {
        try {
            const url = 'https://www.alexis.com/users/';
            expect.assertions(1);
            const result = await getUsersById(url, 2);
        } catch(error) {
            expect(error.message).toMatch('code 404');
        }
    });
    
    it('Mock funcion foreach', () => {
        const mockCallBack = jest.fn(x => x * 2);
        forEach([1,4,3], mockCallBack);
        // La función mock es llamada 3 veces
        expect(mockCallBack.mock.calls.length).toBe(3);
        expect(mockCallBack.mock.calls[0][0]).toBe(1);
        expect(mockCallBack.mock.calls[1][0]).toBe(4);
        console.log(mockCallBack.mock.calls);

        expect(mockCallBack.mock.results[0].value).toBe(2);
        console.log(mockCallBack.mock.results);
    });

    it('Valores de retorno', () => {
        const mockCallBack = jest.fn();
        //console.log(mockCallBack);
        mockCallBack.mockReturnValueOnce(2).mockReturnValueOnce('y').mockReturnValue(false);
        console.log(mockCallBack(), mockCallBack(), mockCallBack(), mockCallBack(), mockCallBack());

        const filterTest = jest.fn();
        filterTest.mockReturnValueOnce(true).mockReturnValueOnce(false);
        const result = [2, 3].filter(i => filterTest(i));
        console.log(result);
        console.log(filterTest.mock.calls);
    });
}); 