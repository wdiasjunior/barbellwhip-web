import React, { useRef, useState, useEffect, useLayoutEffect } from "react";

import Header from "../../sharedComponents/header/header";
// import Loading from "../../sharedComponents/loading/loading";
import WeightView from "./components/weightView/weightView";
import NumberInput from "../../sharedComponents/numberInput/numberInput";
import WeightCalc from "./utils/WeightCalc";

import styles from "./plateMathPageStyles";

import { weightConversion } from "../../helpers/weightConversion";

import { useAtom } from "jotai";
import {
  activeThemeAtom,
  selectedLocaleAtom,
  plateMathPageWeight,
  plateMathWeightUnit,
  plateMathShowBumper,
  plateMathBarWeight,
  plateMathWeightRack,
  plateMathBumperPlatesRack,
} from "../../helpers/jotai/atomsWithStorage";

import { useInitialRender } from "../../helpers/useInitialRender";

interface Props {
  setNavBarOpen: () => void;
}

const PlateMathPage = (props: Props) => {

  const isInitialRender = useInitialRender();

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);
  const [currentWeight, setCurrentWeight] = useAtom(plateMathPageWeight);
  const [weightUnit, setWeightUnit] = useAtom(plateMathWeightUnit); // false == kg == left, true == lbs == right
  const [showBumper, setShowBumper] = useAtom(plateMathShowBumper);
  const [barWeight, ] = useAtom(plateMathBarWeight);
  const [weightRack, ] = useAtom(plateMathWeightRack);
  const [bumperPlatesRack, ] = useAtom(plateMathBumperPlatesRack);
  const [isModalWeightInputVisible, setModalWeightInputVisible] = useState(false);
  const currentPlates = showBumper ? WeightCalc.getPlates(currentWeight, barWeight[weightUnit ? "lbs" : "kg"], weightRack[weightUnit ? "lbs" : "kg"], bumperPlatesRack[weightUnit ? "lbs" : "kg"]) : WeightCalc.getPlates(currentWeight, barWeight[weightUnit ? "lbs" : "kg"], weightRack[weightUnit ? "lbs" : "kg"]);

  const onScreenLoad = () => {
    // navigation.setOptions({ headerTitle: () =>
    //               <Header title={selectedLocale.plateMathPage.title} weightRack={true} />
    //           });
  }

  useLayoutEffect(() => {
    if(isInitialRender) onScreenLoad();
  }, [])

  const decrementWeight = () => {
    if((currentWeight - 5) < 0) {
      setCurrentWeight(0);
    } else {
      setCurrentWeight(currentWeight - 5);
    }
  }

  const incrementWeight = () => {
    if((currentWeight + 5) > 2000) {
      setCurrentWeight(2000);
    } else {
      setCurrentWeight(currentWeight + 5);
    }
  }

	const toggleModal = (weight: string) => {
    if(typeof weight === "string" || weight instanceof String) {
      const weightUpdated = parseFloat(weight);
      setCurrentWeight(weightUpdated);
    }
    setModalWeightInputVisible(!isModalWeightInputVisible);
  };

  // TODO
  // juggernaut plate math page structure
  // weight unit toggle
  // weight input
  // bar input (make plate rack input priority?)
  // smallest plates input
  //
  // plate view
  // total weight
  // (bar weight + plates weight)
  // color coded plates? toggle to turn it on and off?

// return (
//   <div style={styles(activeTheme).container}></div>
// )
  return (
    <div style={styles(activeTheme).container}>
      <Header
        title={selectedLocale.plateMathPage.title}
        setNavBarOpen={props.setNavBarOpen}
        weightRack={true}
      />
      {!isInitialRender ? (
        <div style={styles(activeTheme).wrapper}>
          <div style={styles(activeTheme).controlsContainer}>

            <div style={styles(activeTheme).cardIncrement}>
              <div style={styles(activeTheme).rowWrapper}>
                <span style={styles(activeTheme).title}>{selectedLocale.plateMathPage.weightLabel}</span>
                <div style={styles(activeTheme).row}>
                  <div onClick={decrementWeight}>
                    <div style={styles(activeTheme).incrementWrapper}>
                      <span style={styles(activeTheme).incrementText}>-</span>
                    </div>
                  </div>

                  <div onClick={toggleModal}>
                    <span style={styles(activeTheme).weight}>{currentWeight} {weightUnit ? "lbs" : "kg"}</span>
                    <span style={styles(activeTheme).weightConverted}>{weightConversion(currentWeight, !weightUnit)} {!weightUnit ? "lbs" : "kg"}</span>
                  </div>

                  <div onClick={incrementWeight}>
                    <div style={styles(activeTheme).incrementWrapper}>
                      <span style={styles(activeTheme).incrementText}>+</span>
                    </div>
                  </div>
                </div>
              </div>

              <span style={styles(activeTheme).info}>{selectedLocale.plateMathPage.currentBarWeightLabel}:
                <span style={styles(activeTheme).infoWeight}> {barWeight[weightUnit ? "lbs" : "kg"]}{weightUnit ? "lbs" : "kg"}</span>
              </span>
              {/*<span style={styles(activeTheme).info}>Current Weight on the Bar:
                <span style={styles(activeTheme).infoWeight}> {WeightCalc.getClosestAvailableWeight(currentWeight, barWeight[weightUnit ? "lbs" : "kg"], weightRack[weightUnit ? "lbs" : "kg"])}{weightUnit}</span>
              </span>*/}

              <span style={styles(activeTheme).bumperLabel}>{selectedLocale.plateMathPage.bumperToggleLabel}</span>
              {/*<Switch
                trackColor={{ false: activeTheme.inactive, true: activeTheme.active }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={setShowBumper}
                value={showBumper}
                style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }], marginTop: 10, }}
              />*/}
            </div>
          </div>

          <WeightView
            weightRack={weightRack[weightUnit ? "lbs" : "kg"]}
            barWeight={barWeight[weightUnit ? "lbs" : "kg"]}
            weight={currentWeight}
            plates={currentPlates}
            activeTheme={activeTheme}
            bumperRack={bumperPlatesRack[weightUnit ? "lbs" : "kg"]}
            weightUnit={weightUnit ? "lbs" : "kg"}
          />

          {/*<Modal
            isVisible={isModalWeightInputVisible}
            onBackButtonClick={() => setModalWeightInputVisible(false)}
            onBackdropPress={() => setModalWeightInputVisible(false)}
            useNativeDriver={true}
            hideModalContentWhileAnimating={true}
            animationInTiming={100}
            animationOutTiming={1}
            backdropTransitionInTiming={100}
            backdropTransitionOutTiming={1}
          >
            <div style={styles(activeTheme).modalContent}>
              <NumberInput weightUnit={weightUnit ? "lbs" : "kg"} toggleModal={toggleModal} inputLabel={weightUnit ? "lbs" : "kg"}/>
            </div>
          </Modal>*/}
        </div>
      ) : (
        <>
          {/*<Loading />*/}
        </>
      )}
    </div>
  );
}

export default PlateMathPage;
