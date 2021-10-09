import React, { useState, useEffect, useCallback } from "react";

const useBmi = () => {
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [calculationHeight, setCalculationHeight] = useState();
    const [calculationWeight, setCalculationWeight] = useState();
    const [bmi, setBmi] = useState();
    const [bmiStatus, setBmiStatus] = useState();

    useEffect(() => {
        // Handle the BMI Status
        switch (true) {
            case bmi < 18.5:
                setBmiStatus("Underweight");
                break;
            case bmi > 18.5 && bmi < 25:
                setBmiStatus("Healthy");
                break;

            case bmi > 25:
                setBmiStatus("Overweight");
                break;

            default:
                setBmiStatus("");
                break;
        }
    }, [bmi]);


    const calculateBmi = useCallback(() => {
        // Calculate the BMI
        if (weight > 0 && height > 0) {
            if (weight > 0 && height > 0) {
                setCalculationHeight(((height / 100) * height) / 100);
                setCalculationWeight(weight);
            }

            calculationHeight &&
                calculationWeight &&
                setBmi(
                    Math.round((calculationWeight / calculationHeight) * 10) /
                        10
                );
        } else {
            setBmi();
        }
      }, [height,weight, calculationHeight, calculationWeight]);

    useEffect(() => {
        calculateBmi();
    }, [height, weight, calculateBmi]);

    const renderResults = () => {
        return (
            <>
                <h2>Results</h2>
                {bmi && (
                    <p>
                        BMI: {bmi} ({bmiStatus})
                    </p>
                )}
            </>
        );
    };

    return {
        height,
        setHeight,
        weight,
        setWeight,
        renderResults,
    };
};

export default useBmi;
