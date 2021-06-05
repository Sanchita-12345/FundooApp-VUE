// import Login from '../../src/pages/Login.vue';
// import{shallowMount} from '@vue/test-utils';
// describe('Login',()=>{
//     describe('When Loaded',()=>{
//         it('has the required elements',()=>{
//             const Wrapper=shallowMount(Login);
//             expect(wrapper.find('#title').exists()).toBe(true);
//         });
//     });
// });

// import { shallowMount } from '@vue/test-utils'
// import Login from '/src/pages/Login.vue'

// describe('Login.vue', () =>{
//   test('setup correctly', () => {
//       expect(true).toBe(true)
//   })
// })

// test('Login.vue', () => {
//   // render the component
//   const wrapper = shallowMount(Login)

//   // should not allow for `username` less than 7 characters, excludes whitespace
//   wrapper.setData({ email: ' '.repeat(7) })

//   // assert the error is rendered
//   expect(wrapper.find('.error').exists()).toBe(true)

//   // update the name to be long enough
//   wrapper.setData({ email: 'sanchitagmail.com' })

//   // assert the error has gone away
//   expect(wrapper.find('.error').exists()).toBe(false)
// })

// import { shallowMount } from '@vue/test-utils';

// import Loginnew from '../../src/pages/Loginnew.vue';

// describe('Loginnew', ()=>{
//     describe('when loaded', ()=>{
//         it('has the required elements',()=>{
//             const wrapper = shallowMount(Loginnew);

//             expect(wrapper.find('#title').exists()).toBe(true);
//             expect(wrapper.find('#title').text()).toBe('Login');
//             expect(wrapper.find('#input-username').exists()).toBe(true);
//             expect(wrapper.find('#input-password').exists()).toBe(true);
//             expect(wrapper.find('#btn-sign-in').exists()).toBe(true);
//             expect(wrapper.find('#btn-sign-in').text()).toBe('sign in');
//         })
//     })
// })




import { createLocalVue, shallowMount } from '@vue/test-utils';
import Loginnew from '../../src/pages/Loginnew.vue';
describe('Loginnew.vue', ()=>{
    let wrapper;
    beforeEach(()=>{
        const localVue = createLocalVue();
        wrapper = shallowMount(Loginnew, localVue);
        
    });
    it('renders a vue insrance', ()=>{
        expect(shallowMount(login).isVueInstance()).toBe(true);
    });
});