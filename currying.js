// currying - which takes a single argument only


// subway order
function subwayOrder(bread)
{
    return function (patty)
    {
        return function(cheese)
        {
            console.log(`My bread ${bread} with patty ${patty} and cheese:${cheese}`);
        }
    }
}

subwayOrder('Origano')('aloo')('cheese');

