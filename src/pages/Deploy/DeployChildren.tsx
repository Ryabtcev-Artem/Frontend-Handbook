import Intro from "./Intro/Intro.tsx";
import DeployPreview from "./DeployPreview.tsx";
import DockerIntro from "./DockerIntro/DockerIntro.tsx";
import DockerScheme from "./DockerScheme/DockerScheme.tsx";
import DockerSetup from "./DockerSetup/DockerSetup.tsx";
import DockerCommands from "./DockerCommands/DockerCommands.tsx";
import Dockerfile from "./Dockerfile/Dockerfile.tsx";
import GitIntro from "./GitIntro/GitIntro.tsx";
import GitStructure from "./GitStructure/GitStructure.tsx";
import GitCommands from "./GitCommands/GitCommands.tsx";
import GitlabCICD from "./GitlabCICD/GitlabCICD.tsx";
export const DeployChildren = [
  {path: '', element: <DeployPreview />},
  {path: 'Intro', element: <Intro />},
  {path: 'DockerIntro', element: <DockerIntro />},
  {path: 'DockerScheme', element: <DockerScheme />},
  {path: 'DockerSetup', element: <DockerSetup />},
  {path: 'DockerCommands', element: <DockerCommands />},
  {path: 'Dockerfile', element: <Dockerfile />},
  {path: 'GitIntro', element: <GitIntro />},
  {path: 'GitStructure', element: <GitStructure />},
  {path: 'GitCommands', element: <GitCommands />},
  {path: 'GitlabCICD', element: <GitlabCICD />},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
]