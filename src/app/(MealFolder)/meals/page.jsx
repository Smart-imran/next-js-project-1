import MealsLink from '@/components/MealsLink/MealsLink';


const mealDBpage = () => {

    

    return (
        <div className='m-12 text-center'>
            <h2 className='text-3xl text-orange-600 font-semibold'>Choose Your Meals</h2>
            <p>Chose your meals of you choice by searching</p>

            <MealsLink></MealsLink>
        </div>
    );
};

export default mealDBpage;