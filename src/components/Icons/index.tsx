import { motion } from "framer-motion"

interface LogoIconProps {
  color: string
}

export const LogoIcon = ({color}:LogoIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="100%" viewBox="0 0 61 51" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 17V51H18V38L30.5 51L43 38V51H61V17L44 0H42L30.119 11.5L19 0H17L0 17ZM57 18L51 13L41.2381 23L30.5 34L9.5 13L4 19V47H14V30H16L30.5 46L45 30H47V47H57V18ZM49 11L39.2191 20.7809L33.1327 14.6076L43 5L49 11ZM30.5 29.5L36.5 23.5L18 5L12 11L30.5 29.5Z" fill={color}/>
    </svg>
  )
}

export const Logo = ({color}:LogoIconProps) => {
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width="315" height="46" viewBox="0 0 315 46" fill="none">
    <path d="M61.5114 7.09091H63.5057L70.3658 23.5625H70.532L77.392 7.09091H79.3864V26H77.7614V10.7379H77.6136L71.2337 26H69.6641L63.2841 10.7379H63.1364V26H61.5114V7.09091ZM85.4814 26H83.6717L90.5503 7.09091H92.3969L99.2754 26H97.4658L91.5382 9.33452H91.409L85.4814 26ZM86.7833 18.7521H96.1639V20.3033H86.7833V18.7521ZM103.556 26V7.09091H109.659C111.001 7.09091 112.121 7.33404 113.02 7.82031C113.925 8.30043 114.605 8.96828 115.06 9.82386C115.522 10.6733 115.753 11.6489 115.753 12.7507C115.753 13.8525 115.522 14.825 115.06 15.6683C114.605 16.5116 113.928 17.1702 113.029 17.6442C112.131 18.1181 111.016 18.3551 109.687 18.3551H104.489V16.7763H109.641C110.626 16.7763 111.444 16.6132 112.097 16.2869C112.755 15.9607 113.245 15.496 113.565 14.8928C113.891 14.2895 114.054 13.5755 114.054 12.7507C114.054 11.9259 113.891 11.2057 113.565 10.5902C113.239 9.96851 112.746 9.4884 112.087 9.14986C111.435 8.81132 110.61 8.64204 109.613 8.64204H105.283V26H103.556ZM111.894 17.4688L116.547 26H114.553L109.945 17.4688H111.894ZM119.854 8.64204V7.09091H133.565V8.64204H127.572V26H125.846V8.64204H119.854ZM140.218 7.09091V26H138.492V7.09091H140.218ZM161.012 7.09091V26H159.332L148.16 10.1655H148.012V26H146.286V7.09091H147.957L159.166 22.9439H159.313V7.09091H161.012ZM175.432 7.09091H177.426L184.286 23.5625H184.453L191.313 7.09091H193.307V26H191.682V10.7379H191.534L185.154 26H183.585L177.205 10.7379H177.057V26H175.432V7.09091ZM199.402 26H197.592L204.471 7.09091H206.318L213.196 26H211.386L205.459 9.33452H205.33L199.402 26ZM200.704 18.7521H210.085V20.3033H200.704V18.7521ZM217.477 26V7.09091H223.58C224.922 7.09091 226.042 7.33404 226.941 7.82031C227.845 8.30043 228.526 8.96828 228.981 9.82386C229.443 10.6733 229.674 11.6489 229.674 12.7507C229.674 13.8525 229.443 14.825 228.981 15.6683C228.526 16.5116 227.849 17.1702 226.95 17.6442C226.051 18.1181 224.937 18.3551 223.608 18.3551H218.409V16.7763H223.561C224.546 16.7763 225.365 16.6132 226.017 16.2869C226.676 15.9607 227.165 15.496 227.485 14.8928C227.812 14.2895 227.975 13.5755 227.975 12.7507C227.975 11.9259 227.812 11.2057 227.485 10.5902C227.159 9.96851 226.667 9.4884 226.008 9.14986C225.356 8.81132 224.531 8.64204 223.534 8.64204H219.203V26H217.477ZM225.814 17.4688L230.468 26H228.473L223.866 17.4688H225.814ZM236.646 7.09091V26H234.919V7.09091H236.646ZM258.215 16.5455C258.215 18.5152 257.864 20.2294 257.163 21.6882C256.461 23.1409 255.495 24.2673 254.264 25.0675C253.039 25.8615 251.629 26.2585 250.035 26.2585C248.441 26.2585 247.028 25.8615 245.797 25.0675C244.572 24.2673 243.609 23.1409 242.907 21.6882C242.211 20.2294 241.864 18.5152 241.864 16.5455C241.864 14.5758 242.211 12.8646 242.907 11.4119C243.609 9.95312 244.575 8.8267 245.806 8.03267C247.037 7.23248 248.447 6.83239 250.035 6.83239C251.629 6.83239 253.039 7.23248 254.264 8.03267C255.495 8.8267 256.461 9.95312 257.163 11.4119C257.864 12.8646 258.215 14.5758 258.215 16.5455ZM256.535 16.5455C256.535 14.8527 256.252 13.4032 255.685 12.1967C255.119 10.9841 254.347 10.0578 253.368 9.41761C252.389 8.77746 251.278 8.45739 250.035 8.45739C248.798 8.45739 247.69 8.77746 246.711 9.41761C245.732 10.0578 244.957 10.9811 244.384 12.1875C243.818 13.3939 243.535 14.8466 243.535 16.5455C243.535 18.2382 243.818 19.6877 244.384 20.8942C244.951 22.1006 245.723 23.027 246.702 23.6733C247.68 24.3134 248.791 24.6335 250.035 24.6335C251.278 24.6335 252.389 24.3134 253.368 23.6733C254.353 23.0331 255.128 22.1098 255.695 20.9034C256.261 19.6908 256.541 18.2382 256.535 16.5455ZM261.499 8.64204V7.09091H275.21V8.64204H269.218V26H267.491V8.64204H261.499ZM278.992 8.64204V7.09091H292.703V8.64204H286.711V26H284.984V8.64204H278.992ZM299.357 7.09091V26H297.63V7.09091H299.357Z" fill={color}/>
    <path d="M62.0511 40V32.7273H64.2919C64.7536 32.7273 65.1489 32.822 65.478 33.0114C65.8094 33.2008 66.0639 33.46 66.2415 33.7891C66.419 34.1181 66.5078 34.4934 66.5078 34.9148C66.5078 35.3314 66.419 35.7043 66.2415 36.0334C66.0639 36.3625 65.8094 36.6229 65.478 36.8146C65.1489 37.004 64.7547 37.0987 64.2955 37.0987H62.3636V36.6868H64.2848C64.6589 36.6868 64.9785 36.611 65.2436 36.4595C65.5088 36.3056 65.7124 36.0961 65.8544 35.831C65.9964 35.5634 66.0675 35.258 66.0675 34.9148C66.0675 34.5691 65.9964 34.2625 65.8544 33.995C65.7124 33.7275 65.5076 33.518 65.2401 33.3665C64.9749 33.215 64.6553 33.1392 64.2812 33.1392H62.495V40H62.0511ZM68.4132 40V32.7273H72.4615V33.1392H68.8571V36.1541H72.2449V36.5661H68.8571V39.5881H72.5468V40H68.4132ZM74.5019 40V32.7273H76.7427C77.202 32.7273 77.5973 32.8172 77.9288 32.9972C78.2602 33.1771 78.5147 33.4268 78.6923 33.7464C78.8698 34.0637 78.9586 34.433 78.9586 34.8544C78.9586 35.2711 78.8698 35.638 78.6923 35.9553C78.5147 36.2701 78.2602 36.5163 77.9288 36.6939C77.5997 36.8714 77.2055 36.9602 76.7462 36.9602H74.7398V36.5447H76.7356C77.1096 36.5447 77.4292 36.4749 77.6944 36.3352C77.9595 36.1955 78.1631 36.0002 78.3052 35.7493C78.4472 35.496 78.5183 35.1977 78.5183 34.8544C78.5183 34.5088 78.4472 34.2081 78.3052 33.9524C78.1631 33.6944 77.9584 33.4943 77.6908 33.3523C77.4257 33.2102 77.1061 33.1392 76.732 33.1392H74.9458V40H74.5019ZM77.4884 36.7045L79.2782 40H78.7668L76.9877 36.7045H77.4884ZM84.8528 34.5455C84.815 34.0933 84.6303 33.7275 84.2989 33.4482C83.9698 33.1688 83.5437 33.0291 83.0205 33.0291C82.6677 33.0291 82.354 33.0942 82.0794 33.2244C81.8048 33.3546 81.5893 33.5322 81.4331 33.7571C81.2768 33.982 81.1987 34.2401 81.1987 34.5312C81.1987 34.7183 81.2342 34.8875 81.3053 35.0391C81.3786 35.1882 81.4816 35.322 81.6142 35.4403C81.7468 35.5563 81.9042 35.6581 82.0865 35.7457C82.2688 35.8333 82.47 35.9103 82.6902 35.9766L83.4857 36.2109C83.7579 36.2938 84.0089 36.3897 84.2385 36.4986C84.4705 36.6075 84.6717 36.7377 84.8422 36.8892C85.015 37.0384 85.1488 37.2135 85.2435 37.4148C85.3405 37.616 85.3891 37.848 85.3891 38.1108C85.3891 38.4943 85.2896 38.8376 85.0908 39.1406C84.8943 39.4437 84.6137 39.6828 84.2491 39.858C83.8869 40.0308 83.4596 40.1172 82.9672 40.1172C82.4984 40.1172 82.0901 40.0379 81.742 39.8793C81.3964 39.7206 81.123 39.5005 80.9217 39.2188C80.7205 38.9347 80.6069 38.608 80.5808 38.2386H81.0354C81.059 38.5393 81.1549 38.7997 81.323 39.0199C81.4935 39.2377 81.7196 39.4058 82.0013 39.5241C82.283 39.6425 82.605 39.7017 82.9672 39.7017C83.3578 39.7017 83.7023 39.6354 84.0006 39.5028C84.2989 39.3679 84.5321 39.1809 84.7001 38.9418C84.8682 38.7027 84.9523 38.4245 84.9523 38.1072C84.9523 37.8516 84.8919 37.6326 84.7712 37.4503C84.6504 37.268 84.4717 37.1106 84.2349 36.978C84.0006 36.8454 83.7094 36.727 83.3614 36.6229L82.5126 36.3672C81.9445 36.1944 81.51 35.9588 81.2094 35.6605C80.9111 35.3622 80.7619 34.9905 80.7619 34.5455C80.7619 34.1714 80.8614 33.84 81.0602 33.5511C81.2591 33.2599 81.529 33.0315 81.8699 32.8658C82.2132 32.7 82.6002 32.6172 83.0311 32.6172C83.4643 32.6172 83.8467 32.7012 84.1781 32.8693C84.5096 33.035 84.7723 33.2635 84.9665 33.5547C85.1606 33.8435 85.2683 34.1738 85.2896 34.5455H84.8528ZM93.1281 36.3636C93.1281 37.1141 92.9979 37.7699 92.7375 38.331C92.4771 38.8897 92.1149 39.3241 91.6509 39.6342C91.1892 39.9444 90.6565 40.0994 90.0528 40.0994C89.4468 40.0994 88.9117 39.9444 88.4477 39.6342C87.9861 39.3217 87.625 38.8861 87.3646 38.3274C87.1042 37.7663 86.974 37.1117 86.974 36.3636C86.974 35.6132 87.1042 34.9586 87.3646 34.3999C87.6274 33.8411 87.9896 33.4067 88.4513 33.0966C88.9129 32.7841 89.4468 32.6278 90.0528 32.6278C90.6565 32.6278 91.1892 32.7829 91.6509 33.093C92.1149 33.4032 92.4771 33.8388 92.7375 34.3999C92.9979 34.9586 93.1281 35.6132 93.1281 36.3636ZM92.6949 36.3636C92.6949 35.6889 92.5812 35.1042 92.354 34.6094C92.1291 34.1146 91.8178 33.7322 91.42 33.4624C91.0223 33.1901 90.5666 33.054 90.0528 33.054C89.5391 33.054 89.0834 33.1889 88.6857 33.4588C88.2879 33.7263 87.9754 34.1087 87.7482 34.6058C87.5232 35.1006 87.4108 35.6866 87.4108 36.3636C87.4108 37.0336 87.5221 37.6172 87.7446 38.1143C87.9695 38.6091 88.2808 38.9927 88.6786 39.2649C89.0763 39.5372 89.5344 39.6733 90.0528 39.6733C90.5666 39.6733 91.0223 39.5384 91.42 39.2685C91.8178 38.9962 92.1291 38.6127 92.354 38.1179C92.5812 37.6231 92.6949 37.0384 92.6949 36.3636ZM100.62 32.7273V40H100.187L95.5494 33.5334H95.5067V40H95.0629V32.7273H95.4996L100.137 39.201H100.18V32.7273H100.62ZM102.639 40H102.17L104.794 32.7273H105.305L107.93 40H107.461L105.068 33.299H105.032L102.639 40ZM103.303 37.2621H106.797V37.674H103.303V37.2621ZM109.486 40V32.7273H109.93V39.5881H113.481V40H109.486ZM122.244 34.5455C122.206 34.0933 122.022 33.7275 121.69 33.4482C121.361 33.1688 120.935 33.0291 120.412 33.0291C120.059 33.0291 119.745 33.0942 119.471 33.2244C119.196 33.3546 118.981 33.5322 118.825 33.7571C118.668 33.982 118.59 34.2401 118.59 34.5312C118.59 34.7183 118.626 34.8875 118.697 35.0391C118.77 35.1882 118.873 35.322 119.006 35.4403C119.138 35.5563 119.296 35.6581 119.478 35.7457C119.66 35.8333 119.861 35.9103 120.082 35.9766L120.877 36.2109C121.149 36.2938 121.4 36.3897 121.63 36.4986C121.862 36.6075 122.063 36.7377 122.234 36.8892C122.406 37.0384 122.54 37.2135 122.635 37.4148C122.732 37.616 122.78 37.848 122.78 38.1108C122.78 38.4943 122.681 38.8376 122.482 39.1406C122.286 39.4437 122.005 39.6828 121.641 39.858C121.278 40.0308 120.851 40.1172 120.359 40.1172C119.89 40.1172 119.481 40.0379 119.133 39.8793C118.788 39.7206 118.514 39.5005 118.313 39.2188C118.112 38.9347 117.998 38.608 117.972 38.2386H118.427C118.45 38.5393 118.546 38.7997 118.714 39.0199C118.885 39.2377 119.111 39.4058 119.393 39.5241C119.674 39.6425 119.996 39.7017 120.359 39.7017C120.749 39.7017 121.094 39.6354 121.392 39.5028C121.69 39.3679 121.923 39.1809 122.092 38.9418C122.26 38.7027 122.344 38.4245 122.344 38.1072C122.344 37.8516 122.283 37.6326 122.163 37.4503C122.042 37.268 121.863 37.1106 121.626 36.978C121.392 36.8454 121.101 36.727 120.753 36.6229L119.904 36.3672C119.336 36.1944 118.901 35.9588 118.601 35.6605C118.302 35.3622 118.153 34.9905 118.153 34.5455C118.153 34.1714 118.253 33.84 118.452 33.5511C118.65 33.2599 118.92 33.0315 119.261 32.8658C119.605 32.7 119.992 32.6172 120.423 32.6172C120.856 32.6172 121.238 32.7012 121.57 32.8693C121.901 33.035 122.164 33.2635 122.358 33.5547C122.552 33.8435 122.66 34.1738 122.681 34.5455H122.244ZM124.735 40V32.7273H125.179V36.1541H129.561V32.7273H130.005V40H129.561V36.5661H125.179V40H124.735ZM138.093 36.3636C138.093 37.1141 137.962 37.7699 137.702 38.331C137.442 38.8897 137.079 39.3241 136.615 39.6342C136.154 39.9444 135.621 40.0994 135.017 40.0994C134.411 40.0994 133.876 39.9444 133.412 39.6342C132.951 39.3217 132.589 38.8861 132.329 38.3274C132.069 37.7663 131.938 37.1117 131.938 36.3636C131.938 35.6132 132.069 34.9586 132.329 34.3999C132.592 33.8411 132.954 33.4067 133.416 33.0966C133.877 32.7841 134.411 32.6278 135.017 32.6278C135.621 32.6278 136.154 32.7829 136.615 33.093C137.079 33.4032 137.442 33.8388 137.702 34.3999C137.962 34.9586 138.093 35.6132 138.093 36.3636ZM137.659 36.3636C137.659 35.6889 137.546 35.1042 137.318 34.6094C137.094 34.1146 136.782 33.7322 136.384 33.4624C135.987 33.1901 135.531 33.054 135.017 33.054C134.504 33.054 134.048 33.1889 133.65 33.4588C133.252 33.7263 132.94 34.1087 132.713 34.6058C132.488 35.1006 132.375 35.6866 132.375 36.3636C132.375 37.0336 132.487 37.6172 132.709 38.1143C132.934 38.6091 133.245 38.9927 133.643 39.2649C134.041 39.5372 134.499 39.6733 135.017 39.6733C135.531 39.6733 135.987 39.5384 136.384 39.2685C136.782 38.9962 137.094 38.6127 137.318 38.1179C137.546 37.6231 137.659 37.0384 137.659 36.3636ZM140.027 40V32.7273H142.268C142.73 32.7273 143.125 32.822 143.454 33.0114C143.786 33.2008 144.04 33.46 144.218 33.7891C144.395 34.1181 144.484 34.4934 144.484 34.9148C144.484 35.3314 144.395 35.7043 144.218 36.0334C144.04 36.3625 143.786 36.6229 143.454 36.8146C143.125 37.004 142.731 37.0987 142.272 37.0987H140.34V36.6868H142.261C142.635 36.6868 142.955 36.611 143.22 36.4595C143.485 36.3056 143.689 36.0961 143.831 35.831C143.973 35.5634 144.044 35.258 144.044 34.9148C144.044 34.5691 143.973 34.2625 143.831 33.995C143.689 33.7275 143.484 33.518 143.216 33.3665C142.951 33.215 142.631 33.1392 142.257 33.1392H140.471V40H140.027ZM146.389 40V32.7273H148.63C149.092 32.7273 149.487 32.822 149.816 33.0114C150.148 33.2008 150.402 33.46 150.58 33.7891C150.757 34.1181 150.846 34.4934 150.846 34.9148C150.846 35.3314 150.757 35.7043 150.58 36.0334C150.402 36.3625 150.148 36.6229 149.816 36.8146C149.487 37.004 149.093 37.0987 148.634 37.0987H146.702V36.6868H148.623C148.997 36.6868 149.317 36.611 149.582 36.4595C149.847 36.3056 150.051 36.0961 150.193 35.831C150.335 35.5634 150.406 35.258 150.406 34.9148C150.406 34.5691 150.335 34.2625 150.193 33.995C150.051 33.7275 149.846 33.518 149.578 33.3665C149.313 33.215 148.994 33.1392 148.62 33.1392H146.833V40H146.389ZM152.752 40V32.7273H156.8V33.1392H153.195V36.1541H156.583V36.5661H153.195V39.5881H156.885V40H152.752ZM158.84 40V32.7273H161.081C161.54 32.7273 161.936 32.8172 162.267 32.9972C162.598 33.1771 162.853 33.4268 163.031 33.7464C163.208 34.0637 163.297 34.433 163.297 34.8544C163.297 35.2711 163.208 35.638 163.031 35.9553C162.853 36.2701 162.598 36.5163 162.267 36.6939C161.938 36.8714 161.544 36.9602 161.085 36.9602H159.078V36.5447H161.074C161.448 36.5447 161.768 36.4749 162.033 36.3352C162.298 36.1955 162.501 36.0002 162.643 35.7493C162.786 35.496 162.857 35.1977 162.857 34.8544C162.857 34.5088 162.786 34.2081 162.643 33.9524C162.501 33.6944 162.297 33.4943 162.029 33.3523C161.764 33.2102 161.444 33.1392 161.07 33.1392H159.284V40H158.84ZM161.827 36.7045L163.616 40H163.105L161.326 36.7045H161.827ZM168.727 32.7273V40H168.283V32.7273H168.727ZM176.59 32.7273V40H176.156L171.518 33.5334H171.476V40H171.032V32.7273H171.469L176.107 39.201H176.149V32.7273H176.59ZM178.888 32.7273H179.371L182.173 39.3608H182.223L185.025 32.7273H185.508V40H185.081V33.782H185.039L182.407 40H181.988L179.357 33.782H179.314V40H178.888V32.7273ZM193.594 36.3636C193.594 37.1141 193.464 37.7699 193.203 38.331C192.943 38.8897 192.58 39.3241 192.116 39.6342C191.655 39.9444 191.122 40.0994 190.518 40.0994C189.912 40.0994 189.377 39.9444 188.913 39.6342C188.452 39.3217 188.091 38.8861 187.83 38.3274C187.57 37.7663 187.44 37.1117 187.44 36.3636C187.44 35.6132 187.57 34.9586 187.83 34.3999C188.093 33.8411 188.455 33.4067 188.917 33.0966C189.379 32.7841 189.912 32.6278 190.518 32.6278C191.122 32.6278 191.655 32.7829 192.116 33.093C192.58 33.4032 192.943 33.8388 193.203 34.3999C193.464 34.9586 193.594 35.6132 193.594 36.3636ZM193.161 36.3636C193.161 35.6889 193.047 35.1042 192.82 34.6094C192.595 34.1146 192.283 33.7322 191.886 33.4624C191.488 33.1901 191.032 33.054 190.518 33.054C190.005 33.054 189.549 33.1889 189.151 33.4588C188.754 33.7263 188.441 34.1087 188.214 34.6058C187.989 35.1006 187.876 35.6866 187.876 36.3636C187.876 37.0336 187.988 37.6172 188.21 38.1143C188.435 38.6091 188.746 38.9927 189.144 39.2649C189.542 39.5372 190 39.6733 190.518 39.6733C191.032 39.6733 191.488 39.5384 191.886 39.2685C192.283 38.9962 192.595 38.6127 192.82 38.1179C193.047 37.6231 193.161 37.0384 193.161 36.3636ZM195.528 40V32.7273H197.89C198.33 32.7273 198.702 32.8054 199.005 32.9616C199.308 33.1179 199.538 33.3369 199.694 33.6186C199.853 33.9003 199.932 34.2282 199.932 34.6023C199.932 34.8958 199.885 35.1562 199.79 35.3835C199.695 35.6108 199.563 35.799 199.392 35.9482C199.224 36.0949 199.026 36.1967 198.799 36.2536V36.2962C199.05 36.3151 199.283 36.4027 199.499 36.5589C199.714 36.7128 199.887 36.9223 200.017 37.1875C200.15 37.4527 200.216 37.7616 200.216 38.1143C200.216 38.486 200.135 38.8139 199.975 39.098C199.816 39.3797 199.578 39.6011 199.261 39.7621C198.943 39.9207 198.55 40 198.082 40H195.528ZM195.972 39.5881H198.082C198.629 39.5881 199.049 39.4508 199.342 39.1761C199.638 38.9015 199.786 38.5476 199.786 38.1143C199.786 37.8089 199.714 37.5355 199.57 37.294C199.428 37.0526 199.23 36.862 198.977 36.7223C198.723 36.5803 198.43 36.5092 198.096 36.5092H195.972V39.5881ZM195.972 36.1044H198.043C198.353 36.1044 198.616 36.0369 198.831 35.902C199.049 35.767 199.215 35.5859 199.328 35.3587C199.444 35.1314 199.502 34.8793 199.502 34.6023C199.502 34.1525 199.363 33.7962 199.083 33.5334C198.804 33.2706 198.406 33.1392 197.89 33.1392H195.972V36.1044ZM202.608 32.7273V40H202.164V32.7273H202.608ZM204.913 40V32.7273H205.357V39.5881H208.908V40H204.913ZM211.182 32.7273V40H210.738V32.7273H211.182ZM213.206 40H212.737L215.362 32.7273H215.873L218.497 40H218.029L215.635 33.299H215.6L213.206 40ZM213.87 37.2621H217.365V37.674H213.87V37.2621ZM220.054 40V32.7273H222.295C222.754 32.7273 223.149 32.8172 223.481 32.9972C223.812 33.1771 224.067 33.4268 224.244 33.7464C224.422 34.0637 224.511 34.433 224.511 34.8544C224.511 35.2711 224.422 35.638 224.244 35.9553C224.067 36.2701 223.812 36.5163 223.481 36.6939C223.152 36.8714 222.757 36.9602 222.298 36.9602H220.292V36.5447H222.288C222.662 36.5447 222.981 36.4749 223.246 36.3352C223.511 36.1955 223.715 36.0002 223.857 35.7493C223.999 35.496 224.07 35.1977 224.07 34.8544C224.07 34.5088 223.999 34.2081 223.857 33.9524C223.715 33.6944 223.51 33.4943 223.243 33.3523C222.978 33.2102 222.658 33.1392 222.284 33.1392H220.498V40H220.054ZM223.04 36.7045L224.83 40H224.319L222.54 36.7045H223.04ZM226.928 32.7273V40H226.484V32.7273H226.928ZM235.018 36.3636C235.018 37.1141 234.888 37.7699 234.627 38.331C234.367 38.8897 234.005 39.3241 233.541 39.6342C233.079 39.9444 232.546 40.0994 231.943 40.0994C231.337 40.0994 230.802 39.9444 230.338 39.6342C229.876 39.3217 229.515 38.8861 229.254 38.3274C228.994 37.7663 228.864 37.1117 228.864 36.3636C228.864 35.6132 228.994 34.9586 229.254 34.3999C229.517 33.8411 229.879 33.4067 230.341 33.0966C230.803 32.7841 231.337 32.6278 231.943 32.6278C232.546 32.6278 233.079 32.7829 233.541 33.093C234.005 33.4032 234.367 33.8388 234.627 34.3999C234.888 34.9586 235.018 35.6132 235.018 36.3636ZM234.585 36.3636C234.585 35.6889 234.471 35.1042 234.244 34.6094C234.019 34.1146 233.708 33.7322 233.31 33.4624C232.912 33.1901 232.456 33.054 231.943 33.054C231.429 33.054 230.973 33.1889 230.576 33.4588C230.178 33.7263 229.865 34.1087 229.638 34.6058C229.413 35.1006 229.301 35.6866 229.301 36.3636C229.301 37.0336 229.412 37.6172 229.634 38.1143C229.859 38.6091 230.171 38.9927 230.568 39.2649C230.966 39.5372 231.424 39.6733 231.943 39.6733C232.456 39.6733 232.912 39.5384 233.31 39.2685C233.708 38.9962 234.019 38.6127 234.244 38.1179C234.471 37.6231 234.585 37.0384 234.585 36.3636Z" fill={color}/>
    <line x1="52" y1="6" x2="52" y2="40" stroke={color} strokeWidth="2"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.21954 17.493V39.5211H17.4147V31.0986L25.1891 39.5211L32.9634 31.0986V39.5211H44.1586V17.493L33.5854 6.47887H32.3415L24.9521 13.9296L18.0366 6.47887H16.7927L6.21954 17.493ZM41.6708 18.1408L37.9391 14.9014L31.8676 21.3803L25.1891 28.507L12.1281 14.9014L8.70735 18.7887V36.9296H14.9269V25.9155H16.1708L25.1891 36.2817L34.2073 25.9155H35.4513V36.9296H41.6708V18.1408ZM36.6952 13.6056L30.6119 19.9425L26.8265 15.943L32.9634 9.7183L36.6952 13.6056ZM25.1891 25.5915L28.9208 21.7042L17.4147 9.7183L13.683 13.6056L25.1891 25.5915Z" fill={color}/>
    <path d="M32.9634 39.5211H44.1586V17.493L33.5854 6.47887H32.3415L24.9521 13.9296L18.0366 6.47887H16.7927L6.21954 17.493V39.5211H17.4147M32.9634 39.5211V31.0986L25.1891 39.5211M32.9634 39.5211H25.1891M25.1891 39.5211L17.4147 31.0986V39.5211M25.1891 39.5211H17.4147M25.1891 28.507L12.1281 14.9014L8.70735 18.7887V36.9296H14.9269V25.9155H16.1708L25.1891 36.2817L34.2073 25.9155H35.4513V36.9296H41.6708V18.1408L37.9391 14.9014L31.8676 21.3803L25.1891 28.507ZM30.6119 19.9425L36.6952 13.6056L32.9634 9.7183L26.8265 15.943L30.6119 19.9425ZM28.9208 21.7042L25.1891 25.5915L13.683 13.6056L17.4147 9.7183L28.9208 21.7042Z" stroke={color} strokeWidth="0.2"/>
    </motion.svg>
  )
}

export const LocationIcon = () => {
  return (
    <svg className="stroke-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.485 12.0005 21.485C11.4704 21.485 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const PhoneIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const EmailIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7M21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7M21 7L12 13L3 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const BedIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 7V18M3 14H21M21 18V10C21 9.46957 20.7893 8.96086 20.4142 8.58579C20.0391 8.21071 19.5304 8 19 8H11V14M8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10Z" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const BathIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 12V5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3H11V5.25M4 21L5 19.5M20 21L19 19.5M4 12H20C20.2652 12 20.5196 12.1054 20.7071 12.2929C20.8946 12.4804 21 12.7348 21 13V16C21 17.0609 20.5786 18.0783 19.8284 18.8284C19.0783 19.5786 18.0609 20 17 20H7C5.93913 20 4.92172 19.5786 4.17157 18.8284C3.42143 18.0783 3 17.0609 3 16V13C3 12.7348 3.10536 12.4804 3.29289 12.2929C3.48043 12.1054 3.73478 12 4 12Z" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const RulerIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 8H6M4 12H7M4 16H6M8 4V6M12 4V7M16 4V6M5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V10C20 10.2652 19.8946 10.5196 19.7071 10.7071C19.5196 10.8946 19.2652 11 19 11H12C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V19C11 19.2652 10.8946 19.5196 10.7071 19.7071C10.5196 19.8946 10.2652 20 10 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4Z" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const MenuIcon = ({color}:LogoIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color}>
      <path d="M4 6H20M4 12H20M4 18H20"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const CloseIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#fff">
      <path d="M16.9497 8.46446C17.3402 8.07394 17.3402 7.44077 16.9497 7.05025C16.5592 6.65972 15.926 6.65972 15.5355 7.05025L12 10.5858L8.46443 7.05025C8.07391 6.65972 7.44074 6.65972 7.05022 7.05025C6.65969 7.44077 6.65969 8.07394 7.05022 8.46446L10.5858 12L7.05022 15.5355C6.65969 15.9261 6.65969 16.5592 7.05022 16.9497C7.44074 17.3403 8.07391 17.3403 8.46443 16.9497L12 13.4142L15.5355 16.9497C15.926 17.3403 16.5592 17.3403 16.9497 16.9497C17.3402 16.5592 17.3402 15.9261 16.9497 15.5355L13.4142 12L16.9497 8.46446Z" />
    </svg>
  )
}

export const LinkedinIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M12 16.5V24M12 12V12.015M18 24V16.5M24 24V19.5C24 18.7044 23.6839 17.9413 23.1213 17.3787C22.5587 16.8161 21.7956 16.5 21 16.5C20.2044 16.5 19.4413 16.8161 18.8787 17.3787C18.3161 17.9413 18 18.7044 18 19.5M9 6H27C28.6569 6 30 7.34315 30 9V27C30 28.6569 28.6569 30 27 30H9C7.34315 30 6 28.6569 6 27V9C6 7.34315 7.34315 6 9 6Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const WspIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path d="M11.25 12.5001C11.25 12.6659 11.3158 12.8249 11.4331 12.9421C11.5503 13.0593 11.7092 13.1251 11.875 13.1251C12.0408 13.1251 12.1997 13.0593 12.3169 12.9421C12.4342 12.8249 12.5 12.6659 12.5 12.5001V11.2501C12.5 11.0844 12.4342 10.9254 12.3169 10.8082C12.1997 10.691 12.0408 10.6251 11.875 10.6251C11.7092 10.6251 11.5503 10.691 11.4331 10.8082C11.3158 10.9254 11.25 11.0844 11.25 11.2501V12.5001ZM11.25 12.5001C11.25 14.1577 11.9085 15.7474 13.0806 16.9195C14.2527 18.0916 15.8424 18.7501 17.5 18.7501M17.5 18.7501H18.75C18.9158 18.7501 19.0747 18.6843 19.1919 18.5671C19.3092 18.4499 19.375 18.2909 19.375 18.1251C19.375 17.9594 19.3092 17.8004 19.1919 17.6832C19.0747 17.566 18.9158 17.5001 18.75 17.5001H17.5C17.3342 17.5001 17.1753 17.566 17.0581 17.6832C16.9408 17.8004 16.875 17.9594 16.875 18.1251C16.875 18.2909 16.9408 18.4499 17.0581 18.5671C17.1753 18.6843 17.3342 18.7501 17.5 18.7501ZM3.75 26.2504L5.8125 21.5004C4.23458 19.2605 3.52833 16.5217 3.82631 13.798C4.12428 11.0744 5.40598 8.55306 7.43088 6.70729C9.45579 4.86152 12.0847 3.81816 14.8242 3.77301C17.5638 3.72787 20.2256 4.68405 22.3102 6.4621C24.3948 8.24016 25.7589 10.7179 26.1465 13.4302C26.534 16.1426 25.9184 18.9032 24.4151 21.1939C22.9119 23.4846 20.6243 25.1479 17.9817 25.8718C15.3392 26.5956 12.5233 26.3302 10.0625 25.1254L3.75 26.2504Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}


export const InstagramIcon = () => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M20 5H10C7.23858 5 5 7.23858 5 10V20C5 22.7614 7.23858 25 10 25H20C22.7614 25 25 22.7614 25 20V10C25 7.23858 22.7614 5 20 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  )
}

export const CashIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none"  className="stroke-secondary">
    <path d="M14.8 8.99997C14.6188 8.68574 14.3557 8.42668 14.0386 8.25053C13.7215 8.07438 13.3625 7.98777 13 7.99997H11C10.4696 7.99997 9.96086 8.21069 9.58579 8.58576C9.21071 8.96083 9 9.46954 9 9.99997C9 10.5304 9.21071 11.0391 9.58579 11.4142C9.96086 11.7893 10.4696 12 11 12H13C13.5304 12 14.0391 12.2107 14.4142 12.5858C14.7893 12.9608 15 13.4695 15 14C15 14.5304 14.7893 15.0391 14.4142 15.4142C14.0391 15.7893 13.5304 16 13 16H11C10.6375 16.0122 10.2785 15.9256 9.96142 15.7494C9.64435 15.5733 9.38115 15.3142 9.2 15M12 6V8M12 16V18M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const TimeIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" className="stroke-secondary">
    <path d="M12 7V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}


export const SmileIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" className="stroke-secondary">
    <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12 3C11.4696 3 10.9609 3.21071 10.5858 3.58579C10.2107 3.96086 10 4.46957 10 5C10 5.53043 10.2107 6.03914 10.5858 6.41421C10.9609 6.78929 11.4696 7 12 7M9 10H9.01M15 10H15.01M9.5 15C9.82588 15.3326 10.2148 15.5968 10.6441 15.7772C11.0734 15.9576 11.5344 16.0505 12 16.0505C12.4656 16.0505 12.9266 15.9576 13.3559 15.7772C13.7852 15.5968 14.1741 15.3326 14.5 15"  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const EnfoqueIcon = () => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none" className="stroke-secondary h-14 w-14">
        <path d="M27.5 29.7917C28.7657 29.7917 29.7917 28.7657 29.7917 27.5C29.7917 26.2343 28.7657 25.2083 27.5 25.2083C26.2343 25.2083 25.2083 26.2343 25.2083 27.5C25.2083 28.7657 26.2343 29.7917 27.5 29.7917Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27.5 38.9583C33.8283 38.9583 38.9583 33.8283 38.9583 27.5C38.9583 21.1717 33.8283 16.0417 27.5 16.0417C21.1717 16.0417 16.0417 21.1717 16.0417 27.5C16.0417 33.8283 21.1717 38.9583 27.5 38.9583Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27.5 48.125C38.8909 48.125 48.125 38.8909 48.125 27.5C48.125 16.1091 38.8909 6.875 27.5 6.875C16.1091 6.875 6.875 16.1091 6.875 27.5C6.875 38.8909 16.1091 48.125 27.5 48.125Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  )
}

export const ValoresIcon = () => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none" className="stroke-secondary h-14 w-14">
        <path d="M27.5 20.625V48.125M27.5 20.625C31.297 20.625 34.375 17.547 34.375 13.75C34.375 9.95304 31.297 6.875 27.5 6.875C23.703 6.875 20.625 9.95304 20.625 13.75C20.625 17.547 23.703 20.625 27.5 20.625ZM27.5 48.125C22.6377 48.125 17.9745 46.1935 14.5364 42.7553C11.0982 39.3171 9.16667 34.654 9.16667 29.7917M27.5 48.125C32.3623 48.125 37.0255 46.1935 40.4636 42.7553C43.9018 39.3171 45.8333 34.654 45.8333 29.7917M48.125 29.7917H43.5417M11.4583 29.7917H6.875" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  )
}

export const MisionIcon = () => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none" className="stroke-secondary h-14 w-14">
        <path d="M11.4583 32.0834H43.5416L33.2291 21.7709L43.5416 11.4584H11.4583V48.125" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  )
}

export const DownArrowIcon = () => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  )
}

export const UpArrowIcon = () => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path d="M16.75 29.5C23.7916 29.5 29.5 23.7916 29.5 16.75C29.5 9.70837 23.7916 4 16.75 4C9.70837 4 4 9.70837 4 16.75C4 23.7916 9.70837 29.5 16.75 29.5Z" fill="black"/>
      <path d="M21.75 21.25C21.75 17.9305 21.75 12.75 21.75 12.75C21.75 12.75 16.5695 12.75 13.25 12.75" fill="black"/>
      <path d="M21.75 12.75L13.25 21.25M21.75 12.75C21.75 12.75 21.75 17.9305 21.75 21.25M21.75 12.75C21.75 12.75 16.5695 12.75 13.25 12.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

  )
}













   

  


