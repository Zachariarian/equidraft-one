import {getInterest} from "../actions/PredictorAction";
import Store from "../store";

const defaultState = {
    data: {
        loanTypes: [
            {
                title: "Personal",
                icon: "directions_car"
            },
            {
                title: "Small Enterprise",
                icon: "home"
            },
            {
                title: "Medium Enterprise",
                icon: "school"
            }
        ],
    },
    values: {
        loanType: {
            title: "Car",
            icon: "directions_car"
        },
        loanAmount: 1000,
        termLength: 12,
        interestRate: null,
        monthlyPayment: null
    }
};


const PredictorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "PREDICTOR_LOAN_TYPE_CHANGED":
            state = {
                ...state,
                values: {
                    ...state.values,
                    loanType: action.payload
                }
            };
            break;
        case "PREDICTOR_MODEL_CHANGED":
            state = {
                ...state,
                values: {
                    ...state.values,
                    [action.payload.model]: action.payload.value,
                    interestRate: null,
                    monthlyPayment: null
                }
            };
            Store.dispatch(getInterest({
                loanAmount: state.values.loanAmount,
                termLength: state.values.termLength,
            }));
            break;

        case "PREDICTOR_INTEREST_FETCHED":
            state = {
                ...state,
                values: {
                    ...state.values,
                    interestRate: action.payload.interestRate,
                    loanAmount: action.payload.loanAmount,
                    termLength: action.payload.termLength,
                    monthlyPayment: action.payload.monthlyPayment,
                }
            };

            break;
        default:
    }
    return state;
};

export default PredictorReducer;