import React from 'react';
import './Publications.css';

const journals = [
  { year: 2023, publications: [
    "Thomas Hickling, Abdelhafid Zenati, Nabil Aouf, Phillippa Spencer Explainability in Deep Reinforcement Learning, a Review into Current Methods and Applications, Accepted in ACM Journal , Computing Surveys, 2023",
    "Thomas Hickling, Nabil Aouf and Phillippa Spencer Robust Adversarial Attacks Detection based on Explainable Deep Reinforcement Learning For UAV Guidance and Planning, Accepted in IEEE Transactions on Intelligent Vehicles. 2023"
  ]},
  { year: 2022, publications: [
    "Duarte Rondao, Nabil Aouf and Mark Richardson ChiNet: Deep Recurrent Convolutional Learning for Multimodal Spacecraft Pose Estimation, Accepted in IEEE Transactions on Aerospace and Electronics Systems (TAES)",
    "Zakaria Chekakta, Abdelhafid Zenati, Nabil Aouf and Olivier Dubois-Matra Robust Deep Learning LiDAR-based Pose Estimation for Autonomous Space Landers, Accepted in Elsevier Acta Astronautica"
  ]},
  { year: 2021, publications: [
    "Abdelhafid Zenati, Mohamed Tadjine, Nabil Aouf, and Taous, Meriem Laleg On the Admissibility and Stability of Multi-Agent Nonlinear Interconnected Positive Systems with Heterogeneous Delays, Accepted in IEEE Transactions on Automatic Control.",
    "Hugo Courtois, Nabil Aouf, Kenan Ahiska and Marco Cecotti, OAST: Obstacle Avoidance System for Teleoperation of UAVs, IEEE Transactions on Human-Machine Systems, accepted for publication, THMS-19-12-0374.R3.",
    "Janing Song, Duarte Rondao and Nabil Aouf Deep Learning-based Spacecraft Relative Navigation Methods: A Survey, Acta Astronautica 2022-02, DOI: 10.1016/j.actaastro.2021.10.025",
    "Lei He, Nabil Aouf and Bifeng Song, Explainable Deep Reinforcement Learning for UAV autonomous path planning, Aerospace Science and Technology, Elsevier, Vol 118, November 2021, 107052.",
    "Axel Beauvisage, Kenan Ahiska, and Nabil Aouf, Robust multispectral visual-inertial navigation with visual odometry failure recovery, IEEE Transactions on Intelligent Transportation Systems (ITS) 2021",
    "Viana, I.B., Kanchwala, H., Ahiska, K. and Aouf, N. (2021). A Comparison of Trajectory Planning and Control Frameworks for Cooperative Autonomous Driving. Journal of Dynamic Systems, Measurement, and Control, 143(7). doi:10.1115/1.4049554.",
    "D Rondao, N Aouf, MA Richardson, V Dubanchet Robust on-manifold optimization for uncooperative space relative navigation with a single camera Journal of Guidance, Control, and Dynamics 44 (6), 1157-1182, 2021"
  ]},
  { year: 2020, publications: [
    "Kechagias-Stamatis O, Aouf N, Koukos JA. Deep Learning Fusion for COVID-19 Diagnosis. medRxiv; 2020. DOI: 10.1101/2020.12.11.20246546.",
    "O Kechagias-Stamatis, N Aouf Automatic Target Recognition on Synthetic Aperture Radar Imagery: A Survey IEEE Aerospace and Electronic Systems Magazine 36 (3), 2020",
    "Carole Belloni, Alessio Balleri, Nabil Aouf, Jean-Marc Le Caillec, and Thomas Merlet Explainability of Deep SAR ATR Through Feature Analysis IEEE TRANSACTIONS ON AEROSPACE AND ELECTRONIC SYSTEMS, AUGUST 2020",
    "Carole Belloni; Nabil Aouf; Alessio Balleri; Jean-Marc Le Caillec; Thomas Merlet Pose-informed deep learning method for SAR ATR IET Radar, Sonar and Navigation Volume 14, Issue 11, November 2020, p. 1649 – 1658",
    "Kechagias-Stamatis, O., Aouf, N., Dubanchet, V. and Richardson, M.A. (2020). DeepLO: Multi-projection deep LIDAR odometry for space orbital robotics rendezvous relative navigation. Acta Astronautica, 177, pp. 270–285. doi:10.1016/j.actaastro.2020.07.034.",
    "Kanchwala, H., Bezerra Viana, I. and Aouf, N. (2020). Cooperative path-planning and tracking controller evaluation using vehicle models of varying complexities. Proceedings of the Institution of Mechanical Engineers, Part C: Journal of Mechanical Engineering Science. doi:10.1177/0954406220945468.",
    "Kechagias-Stamatis, O., Aouf, N. and Dubanchet, V. (2020). Evaluating 3D local descriptors and recursive filtering schemes for LIDAR-based uncooperative relative space navigation. Journal of Field Robotics, 37(5), pp. 848–888. doi:10.1002/rob.21904.",
    "Rondao, D., Aouf, N., Richardson, M.A. and Dubois-Matra, O. (2020). Benchmarking of local feature detectors and descriptors for multispectral relative navigation in space. Acta Astronautica, 172, pp. 100–122. doi:10.1016/j.actaastro.2020.03.049.",
    "H. Isakhani, N. Aouf, O. Kechagias-Stamatis, and J.F. Whidborne A Furcated Visual Collision Avoidance System for an Autonomous Micro Robot, IEEE Transactions on Cognitive and Developmental Systems ( Volume: 12 , Issue: 1 , March 2020 )"
  ]},
  { year: 2019, publications: [
    "Kechagias-Stamatis, O., Aouf, N. and Richardson, M.A. (2019). High-speed multi-dimensional relative navigation for uncooperative space objects. Acta Astronautica, 160, pp. 388–400. doi:10.1016/j.actaastro.2019.04.050.",
    "Kechaigias-Stamatis and Nabil Aouf Hinfinity Lidar Odometry for Spacecraft Relative Navigation, accepted for IET Radar and Navigation Journal January 2019",
    "O. Kechagias-Stamatis and N. Aouf Fusing Deep Learning and Sparse Coding for SAR ATR IEEE Transactions on Aerospace and Electronic Systems ( Volume: 55 , Issue: 2 , April 2019 ) .",
    "Aouf, N., Kharbat, M. and Chun Liang, L. (2019). Video detection, tracking and path planning for ground autonomous systems. International Journal of Computational Intelligence in Control, 11(1), pp. 15–24."
  ]},
  { year: 2018, publications: [
    "O. Kechagias-Stamatis and N. Aouf A New Passive 3D Automatic Target Recognition Architecture for Aerial Platforms IEEE Transactions on Geoscience and Remote Sensing, 2019, DOI:10.1109/TGRS.2018.2855065.",
    "T. Mouats, N. Aouf, D. Nam, and S. Vidas Performance Evaluation of Feature Detectors and Descriptors Beyond the Visible J Intell Robot Syst (2018). https://doi.org/10.1007/s10846-017-0762-8",
    "O. Kechagias-Stamatis, N. Aouf, G. Gray, M. Richardson, and F. Oudyi Local feature based automatic target recognition for future 3D active homing seeker missiles Aerospace Science and Technology, 2018"
  ]},
  { year: 2017, publications: [
    "O. Kechagias-Stamatis, N. Aouf Evaluating 3D local descriptors for future LIDAR missiles with automatic target recognition capabilities Imaging Science Journal Pages 428-437 | Received 27 Apr 2017, Accepted 24 Jul 2017, Published online: 14 Aug 2017",
    "M. Boulekchour, N. Aouf, and M. Richardson Robust Linfinity convex optimisation for UAVs cooperative motion estimation Proceedings of the Institution of Mechanical Engineers, Part G: Journal of Aerospace Engineering, Vol 231, Issue 11, 2017 DOI: 10.1177/0954410016675889",
    "S. Almutairi and N. Aouf Reconfigurable dynamic control allocation for aircraft with actuator failure, The Aeronautical Journal, Cambridge University Press, Vol 121, Issue 1237, pp. 341-371, March 2017",
    "O. Araar, N. Aouf and M. Richardson Vision Based Autonomous Landing of Multirotor UAV on Moving Platform Journal of Intelligent & Robotic Systems, Springer, , Volume 85, Issue 2, pp 369–384, February 2017",
    "O. Yılmaz, N. Aouf, E. Checa, L. Majewski, and M. Sanchez- Gestido Thermal Analysis of Space Debris for Infrared Based Active Debris Removal. In Proceedings of the Institution of Mechanical Engineers, Part G: Journal of Aerospace Engineering, 2017 (First Published November 17, 2017)",
    "L. Chermak, N. Aouf and M.Richardson Scale Robust IMU-assisted KLT for Stereo Visual Odometry Solution Robotica, 35(9), pp. 1864-1887, 2017 Cambridge Journals."
  ]},
  { year: 2016, publications: [
    "L. Chermak and N. Aouf, M. Richardson and G. Visentin Real Time Smart and Standalone Vision-IMU Navigation Sensor Springer, Journal of Real Time imaging (2016). https://doi.org/10.1007/s11554-016-0613-z"
  ]},
  { year: 2015, publications: [
    "R. Azzam, M.S. Kemouche, N. Aouf and M. Richardson Efficient Visual Object Detection with Spatially Global Gaussian Mixture Models With Uncertainties Elsevier, Journal of Visual Communication and Image Representation, November 2015, 10.1016/j.jvcir.2015.11.009",
    "Amamra, N. Aouf, S. Dowling and M. Richardson A Recursive Robust Filtering Approach for 3D Registration Springer Journal, Signal, Image and Video Processing Accepted, September 2015",
    "Araar O and Aouf N Practical Servoing of VTOL UAVs From Object of Unknown 3D Geometry: a New Hybrid Approach Imaging Science Journal, July 2015",
    "T. Mouats, N. Aouf, L. Chermak, and M.A. Richardson Thermal Stereo Odometry for UAVs Sensors Journal, IEEE (Volume:PP , Issue: 99 ) 10.1109/JSEN.2015.2456337, July 2015",
    "Mouats T, Aouf N & Richardson MA A Novel image representation via local frequency analysis for illumination invariant stereo matching IEEE Transactions on Image Processing, PP (99) IF (3.62) May 2015",
    "Araar O, Aouf N & Vallejo JL Power pylon detection and monocular depth estimation from inspection UAVs Industrial Robot-An International Journal, 42 (3) February 2015",
    "D Rodriguez; N Aouf and M Richardson Moments-based stereo camera egomotion analysis and results for long-range trajectories The Imaging Science Journal, Doi: 10.1179/1743131X12Y.0000000034 2012 Most read paper up to November 2015 (online)"
  ]},
  { year: 2014, publications: [
    "Amamra and N. Aouf Real-Time Multiview Data Fusion For Object Tracking With RGBD Sensors Robotica, Cambridge Journals November 2014",
    "M. Boulekchour, N. Aouf and M. Richardson Robust L∞ convex pose-graph optimization for monocular localization solution for UAVs Imeche Journal of Aerospace Engineering, November 2014",
    "T. Mouats, N. Aouf, A. Sappa, C. Aguilera, and R. Toledo Multi-Spectral Stereo Odometry IEEE Transactions on Intelligent Transportation Systems September 2014",
    "Amamra and N. Aouf GPU-based real-time RGBD data filtering Springer, Journal of Real-Time Image Processing, September 2014",
    "Abdenour Amamra and Nabil Aouf GPU-based real-time RGBD data filtering Springer, Journal of Real-Time Image Processing Doi 10.1007/s11554-014-0453-7, Sept 2014",
    "Almutairi, Saif H., and Nabil Aouf Design and Non-Linear Simulations of a Fault-Tolerant Flight Control Advanced Materials Research; Vol.1016; pp. 671-77, August 2014",
    "Mohammed Boulekchour, Nabil Aouf and Mark Richardson Robust L∞ Convex Optimisation for Monocular Visual Odometry Trajectory Estimation ROBOTICA, Cambridge Journals Doi: http://dx.doi.org/10.1017/S0263574714001829, July 2014",
    "B. Djamaa, M. Richardson, N. Aouf and B. Walters Towards Efficient Distributed Service Discovery in Low-Power and Lossy Networks Springer Wireless Networks Journal, June 2014",
    "Luke Feetham, Nabil Aouf, Clement Boudarias and Thomas Voirin Single Camera Absolute Motion Based Digital Elevation Mapping for a Next Generation Planetary Lander Acta Astronautica 98C (2014), pp. 169-188, FEB-2014",
    "Lounis Chermak and Nabil Aouf HDR Imaging for Feature Tracking in Challenging Visibility Scenes Kybernetes Vol. 43 Iss: 8, pp.1129 – 1149, 2014",
    "Xiaodong Li, Nabil Aouf and Mark Richardson Comparative Analysis on SIFT Features in Visible and Infrared Aerial Imaging International Journal of Applied Pattern Recognition, Vol.1, No.3 pp.273 – 297 2014"
  ]},
  { year: 2012, publications: [
    "Greer J. Gray; Nabil Aouf; Mark A. Richardson; Brian Butters and Roy Walmsley An Intelligent Tracking Algorithm For an Imaging Infrared Anti-Ship Missile SPIE Optical Engineering Journal IF (0.95) February 2012",
    "Saad Imran and · Nabil Aouf Robust L∞ Homography Estimation using Reduced Image Feature Covariances from an RGB Image Journal of Electronic Imaging, SPIE, Vol:21, Issue:4 Doi:10.1117/1.JEI.21.4.043022 IF (0.672) December 2012",
    "D Rodriguez; N Aouf and M Richardson Moments-based stereo camera egomotion analysis and results for long-range trajectories The Imaging Science Journal, Doi:10.1179/1743131X12Y.0000000034 2012 Most read paper up to November 2015 (online)",
    "K. Nemra and N. Aouf Cooperative Visual SLAM with Experimental Validation Proceedings of the Institution of Mechanical Engineers, Part G: Journal of Aerospace Engineering, Professional Engineering Publishing. DOI:10.1177/0954410012466006, 2012",
    "M. Kharbat and N. Aouf Recursive Estimation of 3-D UAV Motion and Structure Based on the Linfinity-Norm Proceedings of the Institution of Mechanical Engineers, Part G: Journal of Aerospace Engineering, Professional Engineering Publishing, doi:10.1177/0954410011415765, vol. 226, no. 7, pp:751-762 ,July 2012 On the 27th January 2012, this article figured in the most read and most cited articles list (online)",
    "N. Aouf and B. Boulet LFT Gain Scheduling Control Preserving Robust Performance Proceedings of the Institution of Mechanical Engineers, Part G: Journal of Aerospace Engineering, Professional Engineering Publishing, doi:10.1177/0954410011415767, vol. 226, no. 7, pp:763-773, July 2012",
    "G. J. Gray; N. Aouf; M. A. Richardson; B. Butters; R. Walmsley; E. Nicholls Feature-based recognition approaches for infrared anti-ship missile seekers, The Imaging Science Journal, DOI:10.1179/1743131X12Y.0000000012, June 2012",
    "Y. Morsly and N. Aouf Particle Swarm Optimization Inspired Probability Algorithm for Optimal Visual Sensor Network Placement IEEE Sensors Journal, VOL. 12, NO. 5, May 2012"
  ]},
  { year: 2011, publications: [
    "M.S. Kemouche and N. Aouf A Gaussian mixture based optical flow modelling for object detection The Imaging Science Journal. DOI: 10.1179/1743131X11Y.0000000050, December, 2011",
    "Greer J. Gray; Nabil Aouf; Mark A. Richardson; Brian Butters; Roy Walmsley; Edgar Nicholls Feature-Based Target Recognition in Infrared Images for Future Unmanned Aerial Vehicles Journal of Battlefield Technology, Vol. 14, No. 2, pp: 27-36 July 2011"
  ]},
  { year: 2010, publications: [
    "K.Nemra and N.Aouf Experimental Airborne 3D Visual Simultaneous Localization and Mapping in Unknown Environments Proceedings of the Institution of Mechanical Engineers, Part G: Journal of Aerospace Engineering, Professional Engineering Publishing, 2010",
    "K. Nemra and N.Aouf INS/GPS Self-Localisation of a UAV using SDRE Nonlinear Filtering IEEE Sensor Journal, Vol. 10, No. 4, April 2010",
    "M. Kharbat and N.Aouf Dense locally-optimised optical flow using robust data fusion Signal, Image and Video Processing, Springer Journal,DOI 10.1007/s11760-010-0155-y, 2010",
    "C.L. Lin, T.C. Kao, Y.H. Li and N. Aouf Potential-Field-Based Evolutionary Route Planner for Unmanned Aerial Vehicles Proceedings of the Institution of Mechanical Engineers, Part G: Journal of Aerospace Engineering, 2010",
    "N. Aouf and M. Kharbat Vision Based Detection, Tracking and Planning for Autonomous Vehicles International Journal of Intelligent Control and Computational Intelligence 2010"
  ]},
  { year: 2009, publications: [
    "K. Nemra and N. Aouf Robust Airborne 3D Visual Simultaneous Localization and Mapping with Observability and Consistency analysis the special issue on Airborne SLAM research problem, Journal of Intelligent and Robotic Systems (Springer) Volume 55, Issue 4-5, August 2009",
    "Nabil Aouf, Anibal Ollero, Jurek Z.Sasiadek Editorial for a: Special Issue on: Airborne Simultaneous Localisation and Map Building (A-SLAM) the special issue on Airborne SLAM research problem, Journal of Intelligent and Robotic Systems (Springer) Volume 55, Issue 4-5 pp 247-248, August 2009",
    "M.S Kemouche and N. Aouf Hinfinity Filter Based Turn Prediction Algorithm for Manoeuvring Target Tracking Journal of Battlefield Technology November 2009",
    "M.W. Hong, C.L. Lin, B.M. Shiu and N. Aouf Stabilizing Networked Pneumatic Control Systems With Time Delays International Journal of Computational Intelligence and Applications Vol. 8, No. 2, pp:209–223, Imperial College Press 2009"
  ]},
  { year: 2008, publications: [
    "N. Aouf and B. Boulet Uncertainty-based model-order reduction of flexible systems preserving robust closed-loop performance Proceedings of the Institution of Mechanical Engineers, Part G: Journal of Aerospace Engineering, Volume 222, Number 2, p: 291-295, Professional Engineering Publishing, 2008",
  ]},
  { year: 2007, publications: [
    "Lazarus, S B., Ashokaraj, I., Tsourdos, A., Zbikowski, R., Silson, Peter M G., Aouf, N., White, B A Vehicle Localization Using Sensors Data Fusion Via Integration of Covariance Intersection and Interval Analysis IEEE Sensors Journal, Volume 7, Issue 12, pp:1775 – 1808, Dec. 2007",
  ]},
  { year: 2006, publications: [
    "M. C. Turner, N. Aouf, D. G. Bates, I. Postlethwaite and B. Boulet Switched control of a V/STOL aircraft: an application of LQ bumpless transfer Proceedings of The Institution of Mechanical Engineers Part I, Journal of Systems and Control Engineering , Vol. 220, pp. 157-170, 2006"
  ]},
  { year: 2004, publications: [
    "C.A. Rabbath, N. Aouf, N. Hori, M. Lauzon Combined Hinfinity Model-Matching Control and Dual-rate Digital Redesign for Missile Acceleration Autopilots Transactions of the Canadian Society for Mechanical Engineering, vol. 28, no. 1, pp. 73-87, 2004"
  ]},
  { year: 2003, publications: [
    "N. Aouf H. Molhem, and C.A.Rabbath Model following control of BTT Missile with switching procedure Invited for the special issue on control of defense systems in the International Journal of Nonlinear studies April 15th 2003",
    "N. Aouf and B. Boulet Uncertainty models for flexible structures AIAA Journal of Guidance, dynamics and Control, August 2003"
  ]},
  { year: 2002, publications: [
    "N. Aouf, D. Bates, I. Postlethwait and B. Boulet Scheduling of integrated flight and propulsion control laws for a V/STOL aircraft from in the acceleration from hover Control engineering practice. IFAC Journal, March 2002",
    "N. Aouf, B. Boulet, R. Botez Model-Controller Reduction for Flexible Aircraft Achieving Robust Performance IEEE Control and systems technology, Vol10, no2, pp 1-9, March 2002"
  ]},
  { year: 2000, publications: [
    "N. Aouf, B. Boulet, R. Botez Robust gust alleviation for flexible aircraft Canadian Aeronautics and Space Journal (Cover page of the Journal)(CASJ) Vol46, no 3, pp 131-141, Sept 2000"
  ]},

];

const conferences = [
  { year: 2022, publications: [
    "Abdelhafid Zenati, Nabil Aouf, and Odysseus Kechagias-Stamatis, Distributed Fuzzy Semi-Infinite Auction Based Optimization for Cooperative Robots Tasks Allocation, the 2022 American Control Conference, Atlanta, Georgia, USA, June 6, 2022.",
    "Amara Khan and Nabil Aouf Encoding A Mathematically Faithful DeepVIO Solution ICCAS 2021 (2021 21st International Conference on Control, Automation and Systems), Korea."
  ]},
  { year: 2021, publications: [
    "Chuyao Wang and Nabil Aouf Deep Reinforcement Learning based Planning for Urban Self-driving with Demonstration and Depth Completion ICCAS 2021 (2021 21st International Conference on Control, Automation and Systems), Korea",
    "Abdelhafid Zenati and Nabil Aouf Sequential and Distributed Auction Based Robots Task Allocation for Objects Assembly, The 2021 IEEE International Conference on Robotics and Biomimetics (ROBIO), China",
    "Maxwell Hogan and Nabil Aouf Towards Real Time Interpretable Object Detection for UAV Platform by Saliency Maps The 2021 IEEE International Conference on Robotics and Biomimetics (ROBIO), China",
    "Masoud, S. Bahraini, Abdelhafid Zenati and Nabil Aouf Autonomous Cooperative Visual Navigation for Planetary Exploration Robots International Conference on Robotics and Automation (ICRA), IEEE, 2021"
  ]},
  { year: 2020, publications: [
    "Alejandro Dena, Kenan Ahiska and Nabil Aouf Image Based Visual Srvoing for Landmine Detection using Quadrotors 2020 15th IEEE Conference on Industrial Electronics and Applications (ICIEA) DOI: 10.1109/ICIEA48937.2020.9248278",
    "Lei He, Nabil Aouf, James F. Whidborne, Bifeng Song: Integrated moment-based LGMD and deep reinforcement learning for UAV obstacle avoidance. ICRA 2020: 7491-7497",
    "Rondao, D., Aouf, N., Richardson, M., Dubranchet, V., and Dubois-Matra, O Thermal Infrared Relative Navigation in Space Using Histograms of Oriented Phase Congruency Features 11th International ESA Conference on Guidance, Navigation & Control Systems, 2020"
  ]},
  { year: 2019, publications: [
    "Belloni, C., Aouf, N., Caillec, J.M.L. and Merlet, T. (2019). Comparison of descriptors for SAR ATR, 2019 IEEE Radar Conference (RadarConf), DOI: 10.1109/RADAR.2019.8835804.",
    "Kanchwala, H., Viana, Í.B., Ceccoti, M. and Aouf, N. (2019). Model predictive tracking controller for a high fidelity vehicle dynamics model, 2019 IEEE Intelligent Transportation Systems Conference (ITSC), DOI: 10.1109/ITSC.2019.8917528.",
    "Cecotti, M., Kanchwala, H. and Aouf, N. (2019). Autonomous Navigation for Mobility Scooters: a Complete Framework Based on Open-Source Software, IEEE Intelligent Transportation Systems Conference (ITSC), DOI: 10.1109/ITSC.2019.8917528.",
    "Viana, I.B., Kanchwala, H. and Aouf, N. (2019). Cooperative trajectory planning for autonomous driving using nonlinear model predictive control, 2019 IEEE International Conference on Connected Vehicles and Expo (ICCVE), DOI: 10.1109/ICCVE45908.2019.8965227.",
    "Belloni, C., Aouf, N., Caillec, J.M.L. and Merlet, T. (2019). SAR Specific Noise Based Data Augmentation for Deep Learning, 2019 IEEE Radar Conference (RadarConf), DOI: 10.1109/RADAR.2019.8835804."
  ]},
  { year: 2018, publications: [
    "Rondao, D. and Aouf, N. (2018). Multi-View Monocular Pose Estimation for Spacecraft Relative Navigation. 2018 AIAA Guidance, Navigation, and Control Conference.",
    "Camarena, M.E., Feetham, L.M., Scannapieco, A.F. and Aouf, N. (2018). FPGA-based multi-sensor relative navigation in space: Preliminary analysis in the framework of the I3DS H2020 project, 69th International Astronautical Congress (IAC), 1-5 Oct 2018, Bremen, Germany.",
    "Rondao, D., Aouf, N. and Dubois-Matra, O. (2018). Multispectral image processing for navigation using low performance computing, 69th International Astronautical Congress (IAC), 1-5 Oct 2018, Bremen, Germany.",
    "Scannapieco, A.F., Feetham, L.M., Camarena, M.E. and Aouf, N. (2018). Space-oriented Navigation Solutions with Integrated Sensor-Suite: The I3DS H2020 project, 69th International Astronautical Congress (IAC), 1-5 Oct 2018, Bremen, Germany.",
    "Viana, I.B. and Aouf, N. (2018). Distributed Cooperative Path-Planning for Autonomous Vehicles Integrating Human Driver Trajectories, 2018 International Conference on Intelligent Systems (IS), DOI: 10.1109/IS.2018.8710544."
  ]},
  { year: 2017, publications: [
    "Yilmaz, O., Aouf, N., Majewski, L., Sanchez-Gestido, M. and Ortega, G. (2017). Using infrared based relative navigation for active debris removal. 10th International ESA Conference on Guidance, Navigation & Control Systems 29 May 2017 – 2 Jun 2017, Salzburg, Austria.",
    "Ruiz, J.A.D. and Aouf, N. (2017). Unscented kalman filter for vision based target localisation with a quadrotor, In: Gusikhin, O. and Madani, K. (Eds.), Proceedings of the 14th International Conference on Informatics in Control, Automation and Robotics. SciTePress. ISBN 978-989-758-264-6.",
    "Ruiz, J.A.D. and Aouf, N. (2017). Real-time setup with PD and backstepping control for a Pelican quadrotor, In: Gusikhin, O. and Madani, K. (Eds.), Proceedings of the 14th International Conference on Informatics in Control, Automation and Robotics. SciTePress. ISBN 978-989-758-264-6.",
    "Belloni, C., Aouf, N., Merlet, T. and Le Caillec, J.M. (2017). SAR image segmentation with GMMs, International Conference on Radar Systems (Radar 2017), DOI: 10.1049/cp.2017.0438.",
    "Kechagias-Stamatis, O., Aouf, N. and Belloni, C. (2017). SAR automatic target recognition based on convolutional neural networks, International Conference on Radar Systems (Radar 2017), DOI: 10.1049/cp.2017.0438.",
    "Issartel, M., Gueriot, D., Aouf, N. and Le Caillec, J.M. (2017). Robust SLAM for side scan sonar image mosaicking, IEEE OCEANS 2017 - Anchorage.",
    "Junoh S, Aouf N (2017) “Person Classification Leveraging Convolutional Neural Network for Obstacle Avoidance via Unmanned Aerial Vehicles”, 2017 International Workshop on Research, Education and Development on Unmanned Aerial Systems (RED-UAS 2017) Linkoping, Sweden; 03-05/10/2017",
    "H. Courtois and N. Aouf “Fusion of Stereo and Lidar Data for Dense Depth Map Computation” 2017 International Workshop on Research, Education and Development on Unmanned Aerial Systems (RED-UAS 2017) Linkoping, Sweden; 03-05/10/2017",
    "A.Beauvisage and N. Aouf “Multimodal visual-inertial odometry for navigation in cold and low contrast environment” European Conference on Mobile Robots, ECMR 2017",
    "Wieszok, Z., Aouf, N., Kechagias-Stamatis, O., Chermak, L. “Stixel based scene understanding for autonomous vehicles” Proceedings of the 2017 IEEE 14th International Conference on Networking, Sensing and Control, ICNSC 2017",
    "Kechagias-Stamatis, O., Aouf, N., Chermak, L. “B-HoD: A lightweight and fast binary descriptor for 3D object recognition and registration” Proceedings of the 2017 IEEE 14th International Conference on Networking, Sensing and Control, ICNSC 2017",
    "Kechagias-Stamatis, O., Aouf, N., Nam, D “Multi-Modal Automatic Target Recognition for Anti-Ship Missiles with Imaging Infrared Capabilities” Conference on Sensor Signal Processing for Defence (SSPD2017), DOI: 10.1109/SSPD.2017.8233244",
    "Kechagias-Stamatis, O., Aouf, N., Nam, D., Belloni, C. “SAR automatic target recognition based on convolutional neural networks” IET International Conference on Radar Systems, Belfast 2017",
    "Kechagias-Stamatis, O., Aouf, N., Nam, D “3D Automatic Target Recognition for UAV Platforms” Conference on Sensor Signal Processing for Defence (SSPD2017), DOI: 10.1109/SSPD.2017.8233223",
    "Nam, D., Aouf, N. “Automated mosaicing for improving vehicle situational awareness in real time” IEEE Intelligent Vehicles Symposium, Proceedings 2017",
    "Courtois, H., Aouf, N. “Haptic feedback for obstacle avoidance applied to unmanned aerial vehicles” International Conference on Unmanned Aircraft Systems, ICUAS 2017",
    "Kechagias-Stamatis, O., Aouf, N., Nam, D., Belloni, C. “Automatic X-ray image segmentation and clustering for threat detection” Proceedings of SPIE - The International Society for Optical Engineering 2017",
    "Belloni, C., Balleri, A., Aouf, N., Merlet, T., Le Caillec, J.-M. “SAR image dataset of military ground targets with multiple poses for ATR” Proceedings of SPIE - The International Society for Optical Engineering 2017"
  ]},
  { year: 2016, publications: [
    "Beauvisage, A., Aouf, N., Courtois, H “Multi-spectral visual odometry for unmanned air vehicles” 2016 IEEE International Conference on Systems, Man, and Cybernetics, SMC 2016 - Conference Proceedings", // 2016
    "Bergé, L.-P., Aouf, N., Duval, T., Coppin, G. “Generation and VR visualization of 3D point clouds for drone target validation assisted by an operator” 2016 8th Computer Science and Electronic Engineering Conference, CEEC 2016 - Conference Proceedings", // 2016
    "Bergé, L.-P., Aouf, N., Duval, T., Coppin, G. “Visualization of 3D point clouds sensed by a laser: Effect of stereo and head tracking rendering on a target research task” IHM 2016 - Actes de la 28ieme Conference Francophone sur l'Interaction Homme-Machine", // 2016
    "Feetham, L., Aouf, N., Dubois-Matra, O., Bourdarias, C. “Image datasets for autonomous planetary landing algorithm development” Proceedings of 2016 7th International Conference on Mechanical and Aerospace Engineering, ICMAE 2016, 7549615, pp. 627-637", // 2016
    "Kechagias-Stamatis, O., Aouf, N. “Histogram of distances for local surface description” Proceedings - IEEE International Conference on Robotics and Automation, pp. 2487-2493, 2016", // 2016
    "Almutairi, S.H., Aouf, N. “Enhancing the aircraft's stability and controllability against actuator faults using robust flight control” Proceedings of 2016 IEEE International Conference on Control and Robotics Engineering, ICCRE 2016, 7476136" // 2016
  ]},
  { year: 2015, publications: [
    "O. Kechagias-Stamatis and N. Aouf, “Fast 3D object matching with Projection Density Energy,” in 23rd Mediterranean Conference on Control and Automation (MED), 2015.", // 2015
    "S. Almutairi and N. Aouf, “Aircraft Robust Flight Tracking Control against Actuator Efficiency Faults” in the International Conference on System theory, Control, and Computing, Romania, 16-19 Oct 2015. (Accepted)." // 2015
  ]},
  { year: 2014, publications: [
    "S. Almutairi and N. Aouf, “Design and Non-Linear Simulations of a Fault-Tolerant Flight Control,” in the International Conference of Mechanical and Aerospace Engineering ICMAE, Madrid, Spain, 18-19 July 2014.", // 2014
    "S. Almutairi and N. Aouf, “Fault-Tolerant Flight Control Design against Actuator Impairments using Optimal Control and Fault Compensation,” in The 11th IEEE International Conference on Control & Automation, Taichung, Taiwan, 18-20 June 2014.", // 2014
    "S. Almutairi and N. Aouf, “ State Feedback Optimal Flight Control System Design with Tracking Feature,” in The 7th Saudi Students Conference, Edinburgh, United Kingdom, 1-2 February 2014.", // 2014
    "Vitanov and N. Aouf Fault diagnosis for MEMS INS using unscented Kalman filter enhanced by Gaussian process adaptation. AHS 2014: 120-126", // 2014
    "Vitanov and N. Aouf Fault diagnosis and recovery in MEMS inertial navigation system using information filters and Gaussian processes IEEE Control and Automation (MED), 2014 22nd Mediterranean Conference of, pp: 115-120" // 2014
  ]},
  { year: 2013, publications: [
    "A. Amamra and N. Aouf, “Robust and Sparse RGBD Data Registration of Scene Views,” in 2013 17th International Conference on Information Visualisation, 2013, pp. 488–493.", // 2013
    "A. Amamra and N. Aouf, “Indoor 3D Augmented Reality,” in 11th Electro Optics and Infrared Conference, Shrivenham, Defence Academy of the UK, Jun. 2013.", // 2013
    "A. Amamra and N. Aouf, “Real-Time Robust Tracking with Commodity RGBD Camera,” in 2013 IEEE International Conference on Systems, Man, and Cybernetics, 2013, pp. 2408–2413.", // 2013
    "Mohammed Boulekchour and Nabil Aouf. “L-infinity Norm Based Solution for Visual Odometry” Computer Analysis of Images and Patterns – 15th International Conference, CAIP 2013, York, UK;", // 2013
    "Vitanov and N. Aouf “Fault detection and isolation in inertial navigation systems with SDRE non-linear filter” 5th European Conference for Aeronautics and Space Sciences (EUCASS). Munich, Germany, July 2013.", // 2013
    "Luke Feetham, Nabil Aouf, Clement Bourdarias, and Thomas Voirin. “Single camera absolute structure from motion using H-infinity data fusion for a next generation planetary lander” 5th European Conference for Aeronautics and Space Sciences (EUCASS). Munich, Germany, July 2013.", // 2013
    "Mouats, T., & Aouf, N. (2013). “Multimodal stereo correspondence based on phase congruency and edge histogram descriptor” 2013 IEEE International Conference on Information Fusion, 1981–1987", // 2013
    "Mouats, T., & Aouf, N. (2013). “Cross-Spectral Stereo Matching Based on Local Self-Similarities and Image Moments” IEEE International Conference on Systems, Man, and Cybernetics, 4048–4053.", // 2013
    "Oualid Araar and Nabil Aouf, “Visual Servoing of a Quadrotor UAV for the Tracking of Linear Structured Infrastructures”, In IEEE International Conference on Systems, Man, and Cybernetics (SMC), Oct 2013", // 2013
    "Riad Azzam and Nabil Aouf Acoustic Detection and Localization Enhanced by Video Analysis (Systems, Man, and Cybernetics (SMC), 2013 IEEE International Conference)", // 2013
    "Riad Azzam and Nabil Aouf The Gaussian Processes for Acoustic Localisation and Tracking in Wireless Sensor Network (5th International Conference on Imaging for Crime Detection and Prevention (ICDP 2013))", // 2013
    "Riad Azzam and Nabil Aouf Non parametric tool for vision detection analysis (ELMAR (ELMAR), 2014 56th International Symposium)" // 2013
  ]},
  { year: 2012, publications: [
    "L. Chermak, N. Aouf. “Feature Enhanced feature detection and matching under extreme illumination conditions with a HDR imaging sensor” In 11th IEEE International Conference on Cybernetic Intelligent Systems (CIS), pages. 64–69, August 2012.", // 2012
    "L. Chermak, N. Aouf. “A Minimax Solution for Stereo Based Motion Estimation” In 11th IEEE International Conference on Cybernetic Intelligent Systems (CIS), pages. 112–117, August 2012.", // 2012
    "Xiaodong Li and Nabil Aouf “Cooperative vSLAM Based on UAV Application” IEEE International Conference on Robotics and Biomimetics (ROBIO), China, 2012.", // 2012
    "Xiaodong Li and Nabil Aouf “Estimation Analysis in VSLAM Based on UAV Application” IEEE International Conference on Multisensor Fusion and Information Integration, Germany, Sept 2012.", // 2012
    "Diego Rodriguez and Nabil Aouf “Robust Ego-Motion for Large-Scale Trajectories” IEEE International Conference on Multisensor Fusion and Information Integration, Germany, Sept 2012.", // 2012
    "Xiaodong Li and Nabil Aouf “SIFT/SURF Feature Analysis in Visible and Infrared Imaging for UAVs” IEEE International Conference on Cybernetic Intelligent Systems, Ireland, August, 2012.", // 2012
    "Lounis Chermak and Nabil Aouf “Enhanced Feature Detection and Matching Under Extreme Illumination Conditions With a HDR Imaging Sensor” IEEE International Conference on Cybernetic Intelligent Systems, Ireland, August, 2012.", // 2012
    "Xiaodong Li and Nabil Aouf “3D Mapping based VSLAM for UAVs” IEEE 20th Mediterranean Conference on Control and Automation. Spain, July 2012.", // 2012
    "Y. Morsly N. Aouf and MS. “Djouadi Dynamic Decentralized/Centralized Free Conflict UAV’s Team Allocation”, IEEE International Instrumentation and Measurement Technology Conference, Austria, May 2012." // 2012
  ]},
  { year: 2011, publications: [
    "Gray, Aouf, Richardson, Butters, Walmsley, Nicholls, Daya “Feature Based Tracking Algorithms for Imaging Infrared Anti-Ship Missiles” SPIE Security & Defence, Prague, Czech Republic, Sept 2011", // 2011
    "Saad Imran and Nabil Aouf “A recursive least squares solution for recovering robust planar homographies” Taros Conference, Sheffield, UK, August 31, 2011", // 2011
    "Karim Nemra and Nabil Aouf “Adaptive Decentralised Cooperative Vision Based Simultaneous Localization and Mapping for Multiple UAVs” IEEE Mediterranean Conference on Control and Automation, GREECE, June, 2011" // 2011
  ]},
  { year: 2010, publications: [
    "M. S. Kemouche, N. Aouf, “A GMM Approximation with Merge and Split for Nonlinear Non-Gaussian Tracking”, accepted, International Conf. on Information Fusion, Fusion2010, Edinburgh, UK, 2010", // 2010
    "M. A Shah, A. Tsourdos, D. James and N. Aouf “On the Definition of Curve’s Frame at the Points of inflection” 8th IFAC Symposium on Automatic Control in AeroSpace (ACA), Nara, Japan, 6 – 10 September 2010", // 2010
    "D. Rodriguez and N. Aouf “Robust Harris-Surf Features for Robotic Vision Based Navigation” 13th International IEEE Annual Conference on Intelligent Transportation Systems, Madeira Island, Portugal, September 19-22, 2010." // 2010
  ]},
  { year: 2009, publications: [
    "M.S. Kemouche, N. Aouf “A Gaussian Mixture Based Optical Flow Modelling For Background/Foreground Image Segmentation” Under review in the IET International Conference on Imaging for Crime Detection and Prevention, December 2009", // 2009
    "Y. Morsly, N. Aouf and M. Djouadi “On The Optimal Placement of Multiple Visual Sensor Based Binary Particle Swarm Optimization” in IFAC International Conference on Intelligent Control and Signal Processing, Turkey, 2009.", // 2009
    "Nemra and N. Aouf “Robust Invariant Automatic Image Registration, sensing and super resolution” in 6th International Symposium on Mechatronics and its Applications, Mars 2009.", // 2009
    "Nemra and N. Aouf “Robust Cooperative UAVs SLAM” in IEEE International Conference on. Cybernetic Intelligent Systems, September 09", // 2009
    "Nemra and N. Aouf “Robust Feature Extraction and Correspondence for UAV Map Building” IEEE, Mediterranean Conference June 2009", // 2009
    "F. Wang, N. Aouf and A. Tsourdos “Centralized/Decentralized Control for Spacecraft Formation Flying Near Sun-Earth L2 Point” IEEE Conference on Industrial Electronics and Applications, China 2009.", // 2009
    "M. Kharbat and Nabil Aouf “Variational model for robust computation of optical Flow” Accepted in IEEE International Conference on. Cybernetic Intelligent Systems, September 09", // 2009
    "M. S. Kemouche, N. Aouf, “A Gaussian Mixture based optical flow modeling for object detection”, 3rd Int. Conf. on Imaging for Cream Detection and Prevention, ICDP2009, London, UK, 3rd Dec. 2009", // 2009
    "M. Shah and N. Aouf “3D Cooperative Pythagorean Hodograph Path Planning and Obstacle Avoidance for Multiple UAVs” in IEEE International Conference on. Cybernetic Intelligent Systems, September 09", // 2009
    "M. Shah and N. Aouf “Dynamic Cooperative Perception and Path Planning for Collision Avoidance” 6th International Symposium on Mechatronics and its Applications, Mars 2009." // 2009
  ]},
  { year: 2008, publications: [
    "A.Nemra, N. Aouf, A. Tsourdos, B.White “Robust Nonlinear Filtering for INS/GPS UAV Localization” 16th Mediterranean Conference on Control and Automation, June 25-27, 2008, Congress Centre, Ajaccio, France", // 2008
    "M. Kharbat, Nabil Aouf, Antonios Tsourdos, Brian White “Robust Brightness Description for Computing Optical Flow”, Accepted for the 19th The British Machine Vision Conference, 1st-4th September 2008", // 2008
    "M.S. Kemouche, N. Aouf “A GMM-Based Multitarget Tracking Algorithm and Analysis” Proceedings of the 11th International Conference on Information Fusion, Germany, 30June-3July, 2008" // 2008
  ]},
  { year: 2007, publications: [
    "Immanuel Ashokaraj, Samuel B. Lazarus, Antonios Tsourdos, Rafal Zbikowski, Peter Silson, Aouf Nabil, Brian A. White, “Robot localisation and mapping using data fusion via integration of covariance intersection and interval analysis for a partially known map”, European Control Conference 2007, Kos, Greece on July 2-5, 2007.", // 2007
    "M. Kharbat, Nabil Aouf, Antonios Tsourdos, Brian White “Sphere Detection and Tracking for a Space Capturing Operation” Proceedings of IEEE International Conference on Advanced Video and Signal based Surveillance, London, pp: 182-187, September 2007", // 2007
    "N. Aouf, V. Sazdovski, A. Tsourdos and B. White, “Low Altitude Airborne SLAM with INS Aided Vision System”, Guidance, navigation and Control Conference, AIAA-2007-6790, 2007", // 2007
    "S. Lazarus, A. Tsourdos, N. Aouf, R. Zbikowski, and B. White, “Autonomous Aerial Vehicle Localisation and Mapping” Guidance, navigation and Control Conference, AIAA-2007-6792, 2007", // 2007
    "M. Kharbat, Nabil Aouf, Antonios Tsourdos, Brian White “Robust Brightness Description for Computing Optical Flow”, Accepted for the 19th The British Machine Vision Conference, 1st-4th September 2007", // 2007
    "M.S. Kemouche, N. Aouf, A. Tsourdos, B. White “A hybrid Kalman/gamma Hinfinity filter for manoeuvring target tracking” Proceedings of IEEE International Conference on Signal Processing and Communication, pp. 1267-1270, 24-27 November, 2007, Dubai, United Arab Emirates", // 2007
    "M. Kharbat, N.Aouf, A.Tsourdos and B.White “Sphere Detection and Tracking for a Space Capturing Operation” IEEE International Conference Advanced Video and Signal based Surveillance 2007", // 2007
    "N. Aouf, V. Sazdovski, A. Tsourdos and B. White,” Low Altitude Airborne SLAM with INS aided Vision System” AIAA-Guidance Navigation and Control Conference 2007", // 2007
   "L. Caravita, A.Tsourdos, N.Aouf, B.White and P.Silson “Control strategies applied to waypoint navigation and obstacle avoidance guidance” Advances in Control and Optimization of Dynamical Systems Conference (ACODS 07)",
    "Lazarus, S.B, Ashokaraj, I.A.R, Tsourdos, A, Zbikowski, R, Silson, P, Aouf, N, White, B.A “Robot Localisation and Mapping Using Data Fusion Via Integration of Covariance Intersection and Interval Analysis for a Partially Known Map” European Control Conference 07.",
  ]},
  { year: 2006, publications: [
    "Z. Li Z., W.F. Xie. And N.Aouf, “A Neural Network Based Hand-Eye Calibration Approach in Robotic Manufacturing Systems”, Conference of Canadian Society of Mechanical Engineers (CSME), Calgary, 2006" // 2006
  ]},
  { year: 2004, publications: [
    "N. Aouf, H. Rajabi and C. Perron “Visual servoing with a Camera mounted on indusrual 6DOF robot” IEEE international conference on robotic, automation and vision Singapore Dec 2004." // 2004
  ]},
  { year: 2003, publications: [
    "Moore, B. Boulet, N. Aouf, P. Girard, R. DiRaddo, “Multivariable H-infinity Control of the Thermoforming Reheat Process”. 3rd DCDIS Int. Conf. on Engineering Applications and Computational Algorithms. Guelph, Ontario, May 15-18 2003", // 2003
    "N. Aouf., “Closed-loop Plasma spray control” Proceedings Surftec Workshop. Sep 2003.", // 2003
    "N. Aouf “Fault Diagnosis and Isolation for thermoforming process” IEEE international control and automation conference Montreal 2003.", // 2003
    "N. Aouf, and C.A. Rabbath “ Intelligent strategy for BTT missile control problem” IEEE international control and automation conference Montreal 2003.", // 2003
    "N. Aouf, R. Diraddo and B. Boulet “Neural control strategy for a thermoforming process” IEEE Conference on Control Applications Turkey 2003." // 2003
  ]},
  { year: 2002, publications: [
    "M. Tuner, N. Aouf, D. Bates, I. Postlethwaite and B. Boulet “Switching Technique for a VSTOL Aircraft”Conference on Control applications September 2002.", // 2002
    "N. Aouf, D. Bates “Scheduling-partitioning technique for Harrier VSTOL aircraft” American Control Conference ACC 2002.", // 2002
    "N. Aouf, B. Boulet, R. Botez “Gain Scheduling technique for B1 Flexible Aircraft” American Control Conference ACC 2002." // 2002
  ]},
  { year: 2001, publications: [
    "N. Aouf, B. Boulet “Uncertainty models for flexible structures” in proceedings of AiAA Guidance, Navigation and Control 2001.", // 2001
    "N. Aouf, D. Bates and I. Postlethwaite “Observer form scheduling for an Hinfinity loopshaping integrated flight and propulsion control law” in proceedings of AiAA Guidance, Navigation and Control 2001.", // 2001
    "N. Aouf, B. Boulet, R. Botez “Model-Controller Reduction for Flexible Aircraft Achieving Robust Performance” in proceedings of American Control Conference ACC 2001." // 2001
  ]},
  { year: 2000, publications: [
    "N. Aouf, B. Boulet, R. Botez “H2 and H-infinity –Optimal Gust Load Alleviation for a Flexible Aircraft” in proceedings of American Control Conference ACC 2000.", // 2000
    "N. Aouf, B. Boulet, R. Botez “Robust gust alleviation for flexible aircraft” Casi (Canadian Aeronautics and Space Institute) conference 2000." // 2000
  ]},
];




const Publications = () => {
  return (
    <div className="publications-page">
      <section className="publications-hero text-center">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold py-4 px-8 inline-block">Publications</h3>
        </div>
      </section>

      <section className="publications-content py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="publications-sections flex justify-between relative">
            <div className="timeline-section">
              <h2 className="text-3xl font-bold mb-8 text-red-600">Journals</h2>
              <div>
                {journals.map((journal, index) => (
                  <div key={index} className="publication">
                    <h3 className="text-xl font-semibold">{journal.year}</h3>
                    <ul className="list-none ml-5">
                      {journal.publications.map((publication, idx) => (
                        <li key={idx} className="mb-2">{publication}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="separator-line"></div>

            <div className="timeline-section">
              <h2 className="text-3xl font-bold mb-8 text-red-600">Peer Reviewed Conferences</h2>
              <div>
                {conferences.map((conference, index) => (
                  <div key={index} className="publication">
                    <h3 className="text-xl font-semibold">{conference.year}</h3>
                    <ul className="list-none ml-5">
                      {conference.publications.map((publication, idx) => (
                        <li key={idx} className="mb-2">{publication}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
