import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M6.446,11.461c0-0.452,0.367-0.818,0.819-0.818h0.004l1.364,0.004c0.452,0,0.82,0.367,0.82,0.82
        v5.159c0.153-0.046,0.349-0.096,0.566-0.146c0.31-0.071,0.527-0.348,0.527-0.666V9.418c0-0.453,0.367-0.82,0.819-0.82h1.368
        c0.455,0,0.82,0.367,0.82,0.82v5.938c0,0,0.343-0.139,0.677-0.278c0.254-0.107,0.418-0.356,0.418-0.63v-7.08
        c0-0.453,0.366-0.82,0.819-0.82h1.368c0.452,0.001,0.817,0.367,0.817,0.82v5.829c1.186-0.858,2.386-1.891,3.34-3.133
        c0.28-0.366,0.359-0.848,0.209-1.284c-1.75-5.037-7.251-7.701-12.288-5.95C3.878,4.58,1.215,10.082,2.965,15.117
        c0.197,0.569,0.448,1.116,0.747,1.639c0.238,0.41,0.693,0.646,1.166,0.604c0.258-0.021,0.58-0.055,0.963-0.102
        c0.344-0.038,0.604-0.33,0.605-0.677V11.461"/>
      <path d="M6.417,19.734c4.312,3.138,10.353,2.184,13.49-2.129c1.202-1.65,1.848-3.642,1.848-5.682
        c0-0.222-0.01-0.442-0.025-0.661C18.201,16.525,11.687,18.985,6.417,19.734"/>
    </Svg>
  );
};

export default Icon;
