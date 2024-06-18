import React from 'react';
import img1 from '../../assets/recentprojects/img1.png';
import file4 from '../../assets/recentprojects/file4.mp4';
import img3 from '../../assets/recentprojects/img3.png';
import img4 from '../../assets/recentprojects/img4.png';

import bannerImage from '../../assets/recentprojects/rpbannerImage.png';
import file7 from '../../assets/recentprojects/file7.mp4';
import file2 from '../../assets/recentprojects/file2.mp4';
import file6 from '../../assets/recentprojects/file6.mp4';
import file3 from '../../assets/recentprojects/file3.mp4';
import file1 from '../../assets/recentprojects/file1.mp4';
import file10 from '../../assets/recentprojects/file10.mp4';
import file9 from '../../assets/recentprojects/file9.mp4';
import file11 from '../../assets/recentprojects/file11.mp4';
import './RecentProjects.css';

const RecentProjects = () => {
  return (
    <div className="recent-projects">
      <section
        className="hero text-center"
        style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}
      >
        <div className="container mx-auto"></div>
      </section>

      <section className="project-gallery py-16 bg-white text-center">
        <div className="container mx-auto px-4 project-section py-16 bg-gradient-to-r from-blue-200 via-gray-200 to-red-200 w-full">
          <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
          <div className="project-item">
            <h3 className="text-2xl font-bold mb-4">Artificial Intelligence Techniques for GNC Design, Implementation And Verification</h3>
            <img src={img1} alt="Project 1" className="mx-auto mb-4" />
            <p className="mb-4">
              Artificial Intelligence Techniques for GNC Design, Implementation And Verification - EXPRO PLUS (AITIVE-GNC) Project funded by European Space Agency (ESA) aiming at proposing a study to make a formal link between the AI-based ML and the control theory-based reasoning and optimisations within a challenging space GNC scenario as introduced above (see Figure 1). It will also provide some levels of validation to AI-based ML techniques by using robust control theory and other formal methods, and it will develop explainability mechanisms to open those AI-based ML black-box schemes for GNC-based perception to increase the level of trust for space engineers to adopt these schemes. The objective of the project is to identify mathematical approaches to support the design and the verification of the next-generation AI-based GNC architectures and functions. More specifically, the objective is to focus on the explainability, and robustness of the system while providing means to formally assess these properties, including Fault Tolerance, Isolation, and Recovery (FDIR) parts of the architecture. These challenges are at the intersection of control, AI, and formal verification.
            </p>
          </div>

          <div className="project-item">
            <h3 className="text-2xl font-bold mb-4">Adversarial Learning for Autonomous System</h3>
            <video src={file4} controls className="mx-auto mb-4" style={{ maxWidth: '600px' }} />
            <p className="mb-4">
              With AI solutions becoming more widespread in their use, there are still outstanding problems that need to be solved. One of these is the susceptibility of AI architectures to adversarial attacks. These adversarial attacks manipulate the inputs to the network by adding a carefully calibrated small perturbation. Though the change to the input is slight and difficult to see for a human operator it can have a large effect on the decision of the AI. This area of research is imperative before autonomous systems can be released to work amongst the general public. That is why we are working with Dstl to look at ways to mitigate this threat by building solutions that detect and neutralise adversarial attacks. Research by the team has already looked at the use of explainability methods to detect adversarial attacks upon an AI-controlled UAV carrying out a guidance task.
            </p>
          </div>

          <div className="project-item">
            <h3 className="text-2xl font-bold mb-4">PRO-ACT – Planetary Robots Deployed for Assembly and Construction Tasks</h3>
            <video src={file1} controls className="mx-auto mb-4" style={{ maxWidth: '600px' }} />
            <p className="mb-4">
              The key robotic elements, namely the rover mobile rover IBIS, the six-legged walking robot Mantis and a mobile gantry are outlined according to the corresponding mission architecture. The ISRU plant is sized to be representative of a future lunar mission, with grasping points to assist robotic manipulation capabilities and considering the effects of reduced lunar gravity. The IBIS mobile robot has a heavy-duty manipulator with interchangeable end effectors, mobility on moderately uneven terrain, with long endurance. The Mantis hexapod provides the capability to move on challenging terrain, use of 2 legs as dual manipulators with limited payload. The mobile gantry is in a stowed configuration and required to be unloaded by the 2 robots. It can self-assemble into the final configuration with elementary assistance by the robots with passive mobility. The project aims to demonstrate the integration of common building blocks for robots that are composed to create functional and intelligent robotic agents. Apart from the lunar exploration mission, a transfer of the applied technologies to terrestrial applications will be evaluated.
            </p>
          </div>

          <div className="project-item">
            <h3 className="text-2xl font-bold mb-4">Artificial Intelligence for Detection of Explosive Device AIDED</h3>
            <video src={file6} controls className="video-item" />
            <p className="mb-4">
              AIDED is a European project part of H2020 and funded by the European Defence Agency (EDA). The project aims to counter explosive ordnances (EOs) through the development of an AI- enabled robotic swarm that can be sent out in advance to detect and classify EOs in the terrain, thereby keeping the human soldiers out of harm’s way. Aside from the devastating loss in human lives, the use of improvised explosive devices (IEDs) by adversaries also significantly hampers and slows down military operations, as the cleaning process is very slow, tedious and costly. AIDED works towards solving this issue by developing advanced AI-processing techniques for the detection and classification of EO threats quickly and efficiently supported by automated and complex mission planning.
            </p>
          </div>


          <div className="project-item">
            <h3 className="text-2xl font-bold mb-4">Trust Through Explainability of AI Based Space Software</h3>
            <div className="video-container mx-auto mb-4">
              <video src={file7} controls className="video-item" />
              <video src={file2} controls className="video-item" />
            </div>
            <p className="mb-4">
              In this project, we study the explainability A1 based algorithms for lunar landing scenario. The objective of the activity is to develop mechanisms related to the explainability of these algorithms to make those onboard intelligent techniques transparent to ensure what they do is safe while meeting the level of performances required by the space applications within an uncertain and acceptable boundary level. Three sub-tasks are divided to achieve XAI-based lunar landing navigation, which are crater detection, crater identification, and relative navigation. The explainability of networks is achieved during the architecture design by introducing attention mechanism into networks. Firstly, the initial state of the lander is assumed to be known and the attention-based recurrent convolutional neural network (RCNN) structure is designed to address the relative pose estimation during the landing phase. Then, a general case "lost in space" is studied, which the initial state of the lander is unknown.
            </p>
          </div>

          <div className="project-item">
            <h3 className="text-2xl font-bold mb-4">OIBAR: Orbital AI-based Autonomous Refuelling</h3>
            <div className="video-placeholder mx-auto mb-4">Video</div>
            <p className="mb-4">
              A spacecraft’s navigation system is of paramount importance for missions involving proximity operations, playing a pivotal role in the success of objectives based on the careful coordination of two or more bodies in space. In particular, new and ambitious rendezvous and docking (RVD) programs implicate the execution of precise manoeuvres at close distances with fast reaction times, justifying the need for autonomous decision-making capabilities to run onboard without a ground station in the loop, especially outside of low Earth orbit. These encompass activities such as on-orbit servicing (OOS), non-cooperative rendezvous (NCRV), and active debris removal (ADR). 
              Orbital AI-based Autonomous Refuelling (OIBAR) represents RAMI’s contribution towards the FAIR-SPACE Hub for Future AI & Robotics for Space, administered/led by Surrey University and funded by UK Research and Innovation (UKRI) and the UK Space Agency. This project aims to develop an artificial intelligence (AI)-based solution for space docking applications, permitting an autonomous and accurate refuelling of existing satellites or stations in space to maintain their activities for longer durations. The two main solution components presented in this work are: 1) a deep learning vision-based orbital relative navigation algorithm exploiting RVD video sequences to safely approach and dock to the target body; and 2) an intelligent hardware mechanism achieving the mechanical docking and refuelling operation of the target. This integrated software/hardware solution is validated in simulation and experimentally at RAMI’s Autonomous Systems and Machine Intelligence Laboratory (ASMIL) facilities to meet space standards and performances for this kind of operation.
            </p>
          </div>

          <div className="project-item">
            <h3 className="text-2xl font-bold mb-4">Deep Neural Network Based LIDAR Navigation for Space Landing operations</h3>
            <video src={file3} controls className="video-item" />
            <p className="mb-4">
              The project is funded by the prestigious body European Space Agency (ESA) and presents an AI navigation architecture to predict a spacecraft odometry, that is suitable for space landing operations using a 3D Light Detection and Ranging (LIDAR) sensor. The solution takes advantage of recent advances in deep learning techniques. Leveraging the convolutional neural networks for feature learning that can help with real-time estimation for a rigid body transformation. Simulated scenarios using PANGU software (Planet and Asteroid Natural scene Generation Utility) to generate LiDAR data presented in three different images (Range, Slope and Elevation). The hardware implementation and validation including sensor’s installation and configuration on a chosen dynamic test bench platform in order to obtain realistic LiDAR data, from a synthetic representative lunar terrain during a simulated landing trajectory at CITY Autonomous System and Machine Intelligence Lab (ASMIL).
            </p>
          </div>
        </div>
      </section>

      {/* Other Research Section */}
      <section className="other-research py-16 bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Other Research</h2>


          <div className="research-item mb-16">
            <h3 className="text-2xl font-bold mb-4">Trajectory Planning and Perception for Autonomous Vehicles</h3>
            <video src={file9} controls className="video-item" />
            <p className="mb-4">
              This project aims to develop artificial intelligence based autonomous driving in complex urban scenarios. To accomplish the objective self-driving car needs to maintain high robustness while facing challenges from dynamic transportation and critical weather conditions. The solution consists of a real-time perception system and a novel decision-making model. To enhance the understanding of surrounding environment, vision-based depth estimation and semantic segmentation approaches are acquired for scene geometry and semantic information. Then fed from the perception model, planning system generates driving commands controlling the vehicle.
            </p>
          </div>

          <div className="research-item mb-16">
            <h3 className="text-2xl font-bold mb-4">Explainable AI for Drones 2D/3D Recognition and Scene understanding</h3>
            <video src={file11} controls className="video-item" />
            <p className="mb-4">
              An uncrewed aerial (or ground) vehicle may utilise object detection to undertake a variety of different tasks. The introduction of Deep Neural Networks has vastly improved the capabilities of object detection. However, it is challenging to deep networks in the wild since they remain opaque, closed box algorithms. Hence, the focus of this project is to develop tools that can assist a developer by providing context behind the detections made by the network. This will allow them to have a greater understanding about the operation and limitations of their deep detector. This area of study is known as Explainable AI (XAI). The explanations are provided in the form of Saliency Maps which show how different parts of the input frame contributed to the network’s output. These saliency maps were generated using KernelSHAP. The work was undertaken with funding and support of the Defense Science and Technology Laboratory (DSTL).
            </p>
          </div>

          <div className="research-item mb-16">
            <h3 className="text-2xl font-bold mb-4">Drl for Cubesats</h3>
              <img src={img4} alt="Project 1" className="mx-auto mb-4" />
            <p className="mb-4">
            Advancements in Reinforcement Learning (RL) algorithms and technologies have opened up new possibilities for their use in autonomous spacecraft control. This work presents two novel Deep Reinforcement Learning (DRL) agents which, when combined, can achieve satellite rendezvous while simultaneously maintaining attitude control. This control method allows for simultaneous, autonomous control that can appropriately actuate a spacecraft even in situations the agent has not previously encountered. The rendezvous controller consists of a Twin- Delayed Deep Deterministic Policy Gradient (TD3) agent that would be able to control a CubeSat and achieve rendezvous with the target satellite. The attitude controller consists of a quaternion-based TD3 agent; it has shown the ability to perform large angle slew manoeuvres and achieve pointing accuracies of less than five degrees error while resisting environmental perturbations. The controller’s feasibility was assessed using a six-Degree-of-Freedom (6-DoF) relative spacecraft dynamics model, along with a model of the spacecraft’s environment. The agents were trained in a simplified environment and subsequently tested in an environment that incorporated disturbance models and actuator noise, providing an evaluation of their capabilities in realistic conditions.	            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecentProjects;
