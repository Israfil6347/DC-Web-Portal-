import { useState, useEffect, useContext } from "react";
import CommonTextInput from "inputComponent/CommonTextInput";
import DropdownInput from "inputComponent/DropdownInput";
import CheckBoxInput from "inputComponent/CheckBoxInput";
import TextArea from "inputComponent/Textarea";
import FeedbackApplicationContext from "context/FeedbackApplicationContext";

const data = [
  { id: 0, label: "Select data", value: "" },
  { id: 1, label: "RED" },
  { id: 2, label: "GREEN" },
  { id: 3, label: "YELLOW" },
];

const Employment = [
  { id: 0, label: "Select Employment", value: "" },
  { id: 0, value: "Employed", label: "Employed" },
  { id: 1, value: "Unemployed", label: "Unemployed" },
];

function Application() {
  const { applicationFeedbackHandler } = useContext(FeedbackApplicationContext);

  return (
    <div className="">
      <div class="mb-4 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
        <div class="grid grid-cols-1">
          <label class="text-light mb-1 text-xs uppercase text-gray-500 md:text-sm">
            Upload Resume
          </label>
          <div class="flex w-full items-center justify-center">
            <label class="group flex h-32 w-full flex-col border-4 border-dashed hover:border-primary hover:bg-gray-100">
              <div class="flex flex-col items-center justify-center pt-7">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="30"
                  viewBox="0 0 1200.000000 1474.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,1474.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      d="M1360 14729 c-448 -50 -851 -296 -1103 -673 -138 -205 -221 -442
-247 -698 -8 -83 -10 -1703 -7 -6068 3 -5522 4 -5961 20 -6034 74 -350 212
-605 455 -837 203 -195 441 -322 735 -392 l92 -22 4650 -2 c4620 -3 4651 -3
4769 17 621 105 1098 569 1239 1204 l22 101 0 5030 0 5030 -22 93 c-42 176
-119 335 -239 495 -63 84 -366 386 -1764 1756 -338 332 -649 629 -690 661
-264 200 -530 306 -860 339 -124 13 -6935 13 -7050 0z m7065 -504 c55 -8 133
-24 174 -36 90 -24 241 -100 336 -169 68 -49 2266 -2196 2349 -2295 59 -69
123 -166 151 -228 59 -128 55 221 55 -5166 0 -4775 -1 -4939 -19 -5026 -91
-440 -445 -757 -901 -806 -63 -6 -1617 -9 -4645 -6 -4186 3 -4555 4 -4615 19
-249 63 -442 183 -586 362 -112 140 -189 317 -214 491 -8 59 -10 1653 -8 6050
l3 5970 22 80 c52 194 136 339 272 476 147 146 312 236 511 278 94 19 143 20
3555 20 3032 1 3472 -1 3560 -14z"
                    />
                    <path
                      d="M5590 11890 c-151 -32 -262 -151 -308 -327 -24 -98 -24 -566 1 -738
44 -304 92 -493 202 -808 47 -132 85 -248 85 -258 0 -21 -175 -485 -310 -819
-125 -313 -253 -609 -425 -986 -76 -164 -142 -312 -149 -328 -10 -25 -65 -55
-427 -236 -437 -219 -616 -317 -789 -433 -350 -233 -534 -434 -586 -639 -21
-81 -13 -155 27 -236 131 -268 482 -317 869 -122 297 150 702 589 1060 1150
40 63 126 196 191 296 l119 180 297 97 c448 146 649 199 1177 311 l201 43 68
-61 c380 -339 801 -554 1271 -648 94 -19 142 -23 311 -22 172 0 211 3 276 21
170 48 285 128 336 238 25 54 28 70 27 165 0 84 -5 116 -23 162 -79 202 -291
335 -629 392 -222 39 -546 44 -862 16 -107 -10 -631 -74 -692 -85 -25 -4 -40
12 -191 198 -227 281 -401 508 -515 672 -105 151 -252 392 -252 413 0 7 40
169 90 360 49 191 105 426 124 522 106 537 96 952 -30 1206 -41 84 -131 187
-202 233 -97 62 -240 92 -342 71z m150 -191 c25 -11 62 -37 83 -57 123 -120
112 -486 -34 -1132 -45 -200 -133 -508 -141 -494 -3 5 -36 104 -72 219 -88
277 -138 527 -167 830 -41 438 113 733 331 634z m177 -2473 c125 -199 434
-617 574 -776 31 -36 95 -112 142 -170 l86 -105 -32 -7 c-18 -4 -131 -28 -252
-53 -397 -83 -609 -139 -1023 -272 -78 -25 -145 -43 -148 -40 -3 3 15 45 40
94 67 134 404 980 482 1210 38 112 71 203 74 203 3 0 29 -38 57 -84z m2208
-1066 c162 -12 242 -30 340 -75 90 -42 147 -92 180 -158 55 -113 41 -225 -40
-315 -123 -137 -292 -147 -623 -35 -177 59 -419 160 -567 236 -111 58 -421
255 -413 263 10 9 531 73 718 87 100 8 273 6 405 -3z m-3646 -857 c-236 -394
-616 -878 -835 -1067 -184 -158 -390 -237 -498 -192 -46 19 -102 80 -122 132
-70 183 168 450 661 744 71 43 799 418 813 420 2 0 -7 -17 -19 -37z"
                    />
                    <path
                      d="M3580 3241 l0 -1131 185 0 185 0 0 438 0 439 218 6 c255 7 367 27
481 83 126 62 236 195 281 341 87 279 24 588 -155 769 -148 149 -254 173 -817
181 l-378 6 0 -1132z m788 814 c146 -45 233 -236 204 -450 -32 -242 -141 -314
-474 -315 l-148 0 0 388 c0 214 3 392 8 397 13 14 352 -2 410 -20z"
                    />
                    <path
                      d="M5260 3241 l0 -1131 313 0 c338 0 446 9 577 47 292 84 503 325 595
678 40 154 49 240 49 440 0 157 -4 208 -23 294 -98 459 -331 702 -741 776 -71
12 -181 18 -432 22 l-338 6 0 -1132z m709 805 c94 -26 163 -67 231 -135 143
-144 202 -341 202 -671 -1 -243 -31 -390 -113 -551 -101 -196 -259 -279 -531
-279 l-128 0 0 831 0 832 143 -6 c78 -3 166 -12 196 -21z"
                    />
                    <path
                      d="M7160 3240 l0 -1130 185 0 185 0 0 490 0 490 353 2 352 3 3 148 3
147 -356 0 -355 0 0 340 0 340 440 0 440 0 0 150 0 150 -625 0 -625 0 0 -1130z"
                    />
                  </g>
                </svg>
                <p class="pt-1 text-sm lowercase tracking-wider text-gray-400 group-hover:text-primary">
                  Select Resume
                </p>
              </div>
              <CommonTextInput
                inputType="file"
                hidden="hidden"
                name="attachedResume"
                InputFeedBack={(name, value) => {
                  // ResumeHandler(input);
                  applicationFeedbackHandler(name, value);
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <div className="grid grid-cols-1">
          <DropdownInput
            label="Current Employment Status"
            name="employmentStatus"
            dropDownData={Employment}
            DropDownFeedBack={(name, value) => {
              applicationFeedbackHandler(name, value);
            }}
          />
        </div>
        <div className="grid grid-cols-1">
          <CommonTextInput
            inputType="text"
            name="noticePeriod"
            label="Required Notice Period"
            InputFeedBack={(name, value) => {
              applicationFeedbackHandler(name, value);
            }}
          />
        </div>
        <div className="grid grid-cols-1">
          <CommonTextInput
            inputType="number"
            label="Expiated salary"
            name="expectedSalary"
            InputFeedBack={(name, value) => {
              applicationFeedbackHandler(name, value);
            }}
          />
        </div>
      </div>
      <div className="my-3">
        <label for="exampleFormControlTextarea1" className="text-md">
          Describe below how you fit into this position (max 100 words, please
          refer specifically to the Job Requirements)
        </label>
        <TextArea
          name="coverLetter"
          InputFeedBack={(name, value) => {
            applicationFeedbackHandler(name, value);
          }}
        />
      </div>
      <div class="mt-4 flex items-center text-onSurface">
        <CheckBoxInput
          question=""
          name="declareIfInformationAreCorrect"
          label="I do hereby declare that the above-mentioned information is, to the
          best of my knowledge, true, complete and accurate. I understand that
          any false statement or information could result in my application or
          appointment being terminated."
          InputFeedBack={(name, value) => {
            applicationFeedbackHandler(name, value);
          }}
        />
      </div>
    </div>
  );
}

export default Application;
