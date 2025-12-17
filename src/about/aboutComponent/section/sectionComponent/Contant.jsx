import SimpleSlider from "./SimpleSlider";

;

const Contant = () => {
    return (
        <div className='flex flex-col justify-center '>
           <div>
             <h2 className='text-4xl font-semibold text-gray-800'>Welcome to Nest</h2>
             <p className='text-sm text-gray-500 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
             <p className='text-sm text-gray-500 mt-5'>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
             <SimpleSlider />
           </div>
        </div>
    );
};

export default Contant;