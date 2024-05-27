import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    python,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    c1,
    c2,
    c3,
    c4,
    colab,
    keras,
    matplotlib,
    numpy,
    opencv,
    tensorflow,
    
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "process",
      title: "Process",
    },
    {
      id: "work",
      title: "Classify",
    },
    {
      id: "demo",
      title: "Demo",
    },

    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "tech",
      title: "Technology",
    },
  ];
  
  const services = [
    {
      title: "Training",                                                                                          
      icon: web,
    },
    {
      title: "Evaluation",
      icon: mobile,
    },
    {
      title: "Classfication",
      icon: creator,
    },
    {
      title: "Maintenance",
     icon: backend,
    },
  ];
  
  const technologies = [
    
    {
      name: "python",
      icon: python,
    },
    {
      name: "opencv",
      icon: opencv,
    },
    {
      name: "matplotlib",
      icon: matplotlib,
    },
   {
      name: "tensorflow",
      icon: tensorflow,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "nodejs",
      icon: nodejs,
    },
    {
      name: "typescript",
      icon: typescript,
    },
    
    


    
  ];
  
  const experiences = [
    {
      title: "Collection ,Pre-processing and training ",
      icon: web,
      iconBg: "#ffffff",
      points: [
        "Relevant data is gathered from various sources, ensuring the dataset is representative and properly labeled. ",
        "16,697 raw images where collected from the telescopes of various space organizations and NGOs'. ",
        "Data is cleaned and prepared for training, handling missing values, outliers, and encoding categorical variables. The data is split into training, validation, and test sets.",
        "Pre-processed data is fed into the RCNN model. Model parameters are adjusted iteratively using optimization algorithms, and model performance is continuously improved over multiple epochs by minimizing a loss function.",
      ],
    },
    {
      title: "Evaluation and Fine Tuning",
      icon: mobile,
      iconBg: "#ffffff",
      points: [
        "Appropriate evaluation metrics are chosen based on task requirements. Metrics such as Accuracy is used for the classification.",
        "Model performance is assessed on a separate validation or test dataset. This procedure aids in understanding how well the model generalizes to unseen data.",
        "Hyperparameters like learning rate, batch size, and regularization parameters are adjusted. This adjustment aids in optimizing model performance.",
        "Pre-trained models are utilized and fine-tuned on the specific dataset. This approach is valuable for tasks with limited data or similar domains.",
      ],
    },
    {
      title: "Deployment and Classifcation",
      icon: creator,
      iconBg: "#ffffff",
      points: [
        "Deployment processes are initiated for the model, ensuring its readiness for operational use.",
        "Model deployment involves tasks such as packaging the model, setting up deployment infrastructure, and integrating it into existing systems.",
        "Classification tasks are performed using the deployed model. Input data is classified into predefined categories or labels based on the model's predictions.",
        "The classification results are generated and utilized for various downstream applications.",
      ],
    },
    {
      title: "Monitoring and Maintenance",
      icon:backend,
      iconBg: "#ffffff",
      points: [
        "Monitoring mechanisms are established to ensure the performance and behavior of deployed models are overseen. Key metrics and indicators are continuously monitored to guarantee model effectiveness and reliability.",
        "Anomalies and deviations from expected behavior are detected and addressed promptly through monitoring systems.",
        "Maintenance tasks are undertaken to uphold the operational integrity of deployed models. Regular updates and patches are applied to the model and its associated infrastructure to address issues and incorporate improvements.",
        "The classification results are generated and utilized for various downstream applications.",
      ],
    },
  ];
  
  const testimonials = [
    {
      name: "Dheeraj N Kashyap",
      email: "dheeraj.nk20@gmail.com",
      role: "Role: Backend and Image Processing. ",
      image: "../assets/company/c1.png",
    },
    {
      name: "Varun Guruprasad",
      email: "gvarun.ml@gmail.com",
      role: "Role: Machine Learning and Research. ",
      image: "../assets/company/c2.png",
    },
    {
      name: "Varun N Kashyap",
      email: "vrnkshyp1401@gmail.com",
      role: "role: Frontend and UI/UX design. ",
      image: "../assets/company/c3.png",
    },
    {
      name: "Sameer Kumble",
      email: "vrnkshyp1401@gmail.com",
      role: "Role: Website and Testing. ",
      image: "../assets/company/c4.png",
    },
  ];
  const projects = [
    {
      name: "Dheeraj N Kashyap ",
      description:"Role: Backend and Image Processing",
      email:"dheeraj.nk20@gmail.com",
      image: c1,
      
    },
    {
      name: "Varun Gurupurandar",
      description:"Role: ML and Research",
      email:"gvarun.ml@gmail.com",
      image: c2,
      
    },
    {
      name: "Varun N Kashyap ",
      description:"Role: Frontend and UI/UX",
      email:"vrnkshyp1401@gmail.com",
      image: c3,
      
    },
    
    {
      name: "Sameer Kumble ",
      description:" Role:  Testing and Deployment",
      email:"sameerkumble.ai@gmail.com",
      image: c4,
      
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
  