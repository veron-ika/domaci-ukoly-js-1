const selectPlan = (planNumber) => {
        const elPlanNumber = document.querySelector(`#plan${planNumber}`)

        const plan1 = document.querySelector('#plan1')
        const plan2 = document.querySelector('#plan2')
        const plan3 = document.querySelector('#plan3')

            if(planNumber === 1) {
                plan2.classList.remove('plan--selected')
                plan3.classList.remove('plan--selected')
                return elPlanNumber.classList.add('plan--selected')

            } else if(planNumber === 2) {
                plan1.classList.remove('plan--selected')
                plan3.classList.remove('plan--selected')
                return elPlanNumber.classList.add('plan--selected')

            } else if(planNumber === 3) {
                plan1.classList.remove('plan--selected')
                plan2.classList.remove('plan--selected')
                return elPlanNumber.classList.add('plan--selected')
            }
}

selectPlan(1)
selectPlan(2)
selectPlan(3)
selectPlan(1)


/* Verze s Kubovou radou */

/*

const selectPlan = (planNumber) => {
    const elPlanNumber = document.querySelector(`#plan${planNumber}`)

    const plan1 = document.querySelector('#plan1')
    const plan2 = document.querySelector('#plan2')
    const plan3 = document.querySelector('#plan3')

    plan1.classList.remove('plan--selected')
    plan2.classList.remove('plan--selected')
    plan3.classList.remove('plan--selected')

        if(planNumber === 1) {
            return elPlanNumber.classList.add('plan--selected')

        } else if(planNumber === 2) {
            return elPlanNumber.classList.add('plan--selected')

        } else if(planNumber === 3) {
            return elPlanNumber.classList.add('plan--selected')
        }
}

selectPlan(1)
selectPlan(2)
selectPlan(3)
selectPlan(2)
*/