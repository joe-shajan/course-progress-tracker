import connectMongo from "../../../utils/connectMongo";
import Chapter from "../../../../models/chapterModel";
import type { NextApiRequest, NextApiResponse } from "next";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

const chaptersArray = [
  {
    chapter: "Welcome to Epic React",
    chapterOrder: 1,
    lessons: [
      {
        lessonTitle: "Welcome to Epic React",
        isComplete: false,
      },
      {
        lessonTitle: "Project READMEs and Pre Reqs",
        isComplete: false,
      },
      {
        lessonTitle: "Clone and Setup",
        isComplete: false,
      },
      {
        lessonTitle: "Running the Epic React Workshop App",
        isComplete: false,
      },
      {
        lessonTitle: "File Structure",
        isComplete: false,
      },
      {
        lessonTitle: "Running Tests",
        isComplete: false,
      },
      {
        lessonTitle: "Example Runthrough",
        isComplete: false,
      },
    ],
  },
  {
    chapter: "Epic React Expert Interviews",
    chapterOrder: 10,
    lessons: [
      {
        lessonTitle: "Creating Open Source Libraries with Tanner Linsley",
        isComplete: false,
      },
      {
        lessonTitle: "Animations and Interactions with Josh Comeau",
        isComplete: false,
      },
      {
        lessonTitle: "Next js and Vercel with Guillermo Rauch",
        isComplete: false,
      },
      {
        lessonTitle: "Building React based Design Systems with Ben Ilegbodu",
        isComplete: false,
      },
      {
        lessonTitle: "The React Ecosystem with Tejas Kumar",
        isComplete: false,
      },
      {
        lessonTitle: "Encapsulation and Styling with Michael Chan",
        isComplete: false,
      },
      {
        lessonTitle: "3D Animation in the Browser with Paul Henschel",
        isComplete: false,
      },
      {
        lessonTitle: "Best Practices for Maintainers with Jenn Creighton",
        isComplete: false,
      },
      {
        lessonTitle: "Breaking into Tech with Samantha Bretous",
        isComplete: false,
      },
      {
        lessonTitle:
          "Best Practices of Server Side Rendering with Monica Powell",
        isComplete: false,
      },
      {
        lessonTitle: "Mock Service Worker MSW with Artem Zakharchenko",
        isComplete: false,
      },
      {
        lessonTitle: "React and React Native documentation with Rachel Nabors",
        isComplete: false,
      },
      {
        lessonTitle: "React Developer Tools with Brian Vaughn",
        isComplete: false,
      },
    ],
  },
  {
    chapter: "React Fundamentals",
    chapterOrder: 2,
    lessons: [
      {
        lessonTitle: "React Fundamentals Welcome",
        isComplete: false,
      },
      {
        lessonTitle: "Basic JS Hello World",
        isComplete: false,
      },
      {
        lessonTitle: "Generate DOM Nodes Extra Credit Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Generate DOM Nodes Extra Extra Credit",
        isComplete: false,
      },
      {
        lessonTitle: "Intro to Raw React APIs",
        isComplete: false,
      },
      {
        lessonTitle: "Raw React APIs Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Nesting Elements Extra Credit Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Break Time",
        isComplete: false,
      },
      {
        lessonTitle: "Using JSX",
        isComplete: false,
      },
      {
        lessonTitle: "Write Markup with JSX Solution",
        isComplete: false,
      },
      {
        lessonTitle:
          "Interpolate className and Children Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Spread Props Extra Credit Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Creating Custom Components",
        isComplete: false,
      },
      {
        lessonTitle: "Render JSX From Functions Solution",
        isComplete: false,
      },
      {
        lessonTitle: "React createElement Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "JSX Extra Credit Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Validation with PropTypes Extra Credit Solution 03",
        isComplete: false,
      },
      {
        lessonTitle: "Use prop types Package Extra Credit Solution 04",
        isComplete: false,
      },
      {
        lessonTitle: "React Fragments Extra Credit Solution 05",
        isComplete: false,
      },
      {
        lessonTitle: "Styling",
        isComplete: false,
      },
      {
        lessonTitle: "style Prop Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Create a Custom Component Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle:
          "Accept a Size Prop to Encapsulate Styling Extra Credit Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Break Time",
        isComplete: false,
      },
      {
        lessonTitle: "Forms",
        isComplete: false,
      },
      {
        lessonTitle: "Form Basics",
        isComplete: false,
      },
      {
        lessonTitle: "Using refs Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Validate lower case Extra Credit Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Control the Input Value Extra Credit Solution 03",
        isComplete: false,
      },
      {
        lessonTitle: "Rendering Arrays",
        isComplete: false,
      },
      {
        lessonTitle: "Render Arrays Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Focus demo Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "React Fundamentals Outro",
        isComplete: false,
      },
    ],
  },
  {
    chapter: "React Hooks",
    chapterOrder: 3,
    lessons: [
      {
        lessonTitle: "React Hooks Welcome",
        isComplete: false,
      },
      {
        lessonTitle: "useState greeting",
        isComplete: false,
      },
      {
        lessonTitle: "Set State in React Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Set Initial Values Through Props Extra Credit Solution",
        isComplete: false,
      },
      {
        lessonTitle: "useEffect persistent state",
        isComplete: false,
      },
      {
        lessonTitle: "localStorage useEffect Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Lazy State Initialization Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Effect Dependencies Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Custom Hook Extra Credit Solution 3",
        isComplete: false,
      },
      {
        lessonTitle: "Flexible localStorage Hook Extra Credit Solution 4",
        isComplete: false,
      },
      {
        lessonTitle: "Hooks Flow",
        isComplete: false,
      },
      {
        lessonTitle: "Lifting state",
        isComplete: false,
      },
      {
        lessonTitle: "Lift State Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Colocate State Extra Credit Solution",
        isComplete: false,
      },
      {
        lessonTitle: "useState tic tac toe",
        isComplete: false,
      },
      {
        lessonTitle: "Managed and Derived State Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Preserve State in localStorage Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "useLocalStorageState Custom Hook Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Add Game History Feature Extra Credit Solution 3",
        isComplete: false,
      },
      {
        lessonTitle: "Class Refactor",
        isComplete: false,
      },
      {
        lessonTitle: "useRef and useEffect DOM interaction",
        isComplete: false,
      },
      {
        lessonTitle: "Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Class Refactor",
        isComplete: false,
      },
      {
        lessonTitle: "Break Time",
        isComplete: false,
      },
      {
        lessonTitle: "useEffect HTTP requests",
        isComplete: false,
      },
      {
        lessonTitle: "Fetch Data",
        isComplete: false,
      },
      {
        lessonTitle: "Handle Errors Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Use a status Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Store the State in an Object Extra Credit Solution 3",
        isComplete: false,
      },
      {
        lessonTitle: "ErrorBoundary Component Extra Credit Solution 4",
        isComplete: false,
      },
      {
        lessonTitle: "Re mount the ErrorBoundary Extra Credit Solution 5",
        isComplete: false,
      },
      {
        lessonTitle: "Use react error boundary Extra Credit Solution 6",
        isComplete: false,
      },
      {
        lessonTitle: "Reset the ErrorBoundary Extra Credit Solution 7",
        isComplete: false,
      },
      {
        lessonTitle: "use resetKeys Extra Credit Solution 8",
        isComplete: false,
      },
      {
        lessonTitle: "React Hooks Outro",
        isComplete: false,
      },
    ],
  },
  {
    chapter: "Advanced React Hooks",
    chapterOrder: 4,
    lessons: [
      {
        lessonTitle: "Advanced React Hooks Welcome",
        isComplete: false,
      },
      {
        lessonTitle: "useReducer simple Counter",
        isComplete: false,
      },
      {
        lessonTitle: "Simple Counter Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Accept Step as Action Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "setState with Object Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Object or Function Extra Credit Solution 3",
        isComplete: false,
      },
      {
        lessonTitle: "Traditional Dispatch Object Extra Credit Solution 4",
        isComplete: false,
      },
      {
        lessonTitle: "useCallback custom hooks",
        isComplete: false,
      },
      {
        lessonTitle: "Extract Logic into Hook Solution",
        isComplete: false,
      },
      {
        lessonTitle: "useCallback for Memoization Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Return Memoized run Function Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Make safeDispatch Extra Credit Solution 3",
        isComplete: false,
      },
      {
        lessonTitle: "useContext simple Counter",
        isComplete: false,
      },
      {
        lessonTitle: "CountProvider Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Create a Consumer Hook Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Caching in Context Provider Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "useLayoutEffect auto growing textarea",
        isComplete: false,
      },
      {
        lessonTitle: "useLayoutEffect Solution",
        isComplete: false,
      },
      {
        lessonTitle: "useImperativeHandle scroll to top bottom",
        isComplete: false,
      },
      {
        lessonTitle: "Scroll to Top Bottom Solution",
        isComplete: false,
      },
      {
        lessonTitle: "useDebugValue useMedia",
        isComplete: false,
      },
      {
        lessonTitle: "Label useDebugValue Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Use the Format Function Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Advanced React Hooks Outro",
        isComplete: false,
      },
    ],
  },
  {
    chapter: "Advanced React Patterns",
    chapterOrder: 5,
    lessons: [
      {
        lessonTitle: "Advanced React Patterns Welcome",
        isComplete: false,
      },
      {
        lessonTitle: "Context Module Functions",
        isComplete: false,
      },
      {
        lessonTitle: "Extract Helper Function Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Compound Components",
        isComplete: false,
      },
      {
        lessonTitle: "Refactor Toggle Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Support DOM Component Children Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Flexible Compound Components",
        isComplete: false,
      },
      {
        lessonTitle: "Extract State into Context Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Custom Hook Validation Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Prop Collections and Getters",
        isComplete: false,
      },
      {
        lessonTitle: "Object of Props Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Prop Getters Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "State Reducer",
        isComplete: false,
      },
      {
        lessonTitle: "Inversion of Control Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Default State Reducer Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "State Reducer Action Types Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Control Props",
        isComplete: false,
      },
      {
        lessonTitle: "Control State with on and onChange Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Add Read Only Warning Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Add a Controlled State Warning Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle:
          "Extract Warnings to a Custom Hook Extra Credit Solution 3",
        isComplete: false,
      },
      {
        lessonTitle: "Don t Warn in Production Extra Credit Solution 4",
        isComplete: false,
      },
      {
        lessonTitle: "Advanced React Patterns Outro",
        isComplete: false,
      },
    ],
  },
  {
    chapter: "React Performance",
    chapterOrder: 6,
    lessons: [
      {
        lessonTitle: "React Performance Welcome",
        isComplete: false,
      },
      {
        lessonTitle: "Code Splitting",
        isComplete: false,
      },
      {
        lessonTitle: "Code Split Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Eager Loading Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Webpack Magic Comments Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Suspense Position",
        isComplete: false,
      },
      {
        lessonTitle: "Coverage Tool",
        isComplete: false,
      },
      {
        lessonTitle: "useMemo for Expensive Calculations",
        isComplete: false,
      },
      {
        lessonTitle: "Wrap a Function in useMemo Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Production Mode Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "getItems Web Worker Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "React memo for Reducing re renders",
        isComplete: false,
      },
      {
        lessonTitle: "Memoize Components Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Custom Comparator Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Primitive Values Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Window Large Lists with react virtual",
        isComplete: false,
      },
      {
        lessonTitle: "Render Large Lists Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Optimize Context Value",
        isComplete: false,
      },
      {
        lessonTitle: "Memoize Context Value Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Separate the Contexts Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Fix Perf Death by a Thousand Cuts",
        isComplete: false,
      },
      {
        lessonTitle: "Colocate State Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Separate Contexts Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Consuming Components Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Slice of App State Extra Credit Solution 3",
        isComplete: false,
      },
      {
        lessonTitle: "Use recoil Extra Credit Solution 4",
        isComplete: false,
      },
      {
        lessonTitle: "Production Performance Monitoring",
        isComplete: false,
      },
      {
        lessonTitle: "Add Performance Monitoring Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Use Trace API Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "React Performance Outro",
        isComplete: false,
      },
    ],
  },
  {
    chapter: "Testing React Apps",
    chapterOrder: 7,
    lessons: [
      {
        lessonTitle: "Testing React Apps Welcome",
        isComplete: false,
      },
      {
        lessonTitle: "Simple Test with ReactDOM",
        isComplete: false,
      },
      {
        lessonTitle: "Render Counter Component Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Test Counter Component Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Increment and Decrement Buttons Solution 3",
        isComplete: false,
      },
      {
        lessonTitle: "Cleaning up Test Environments Solution 4",
        isComplete: false,
      },
      {
        lessonTitle: "Add use dispatchEvent Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Simple Test with React Testing Library",
        isComplete: false,
      },
      {
        lessonTitle: "Rendering Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Firing Events Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Accretions Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Avoid Implementation Details",
        isComplete: false,
      },
      {
        lessonTitle: "Screen Utility Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Browser Interactions Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Form Testing",
        isComplete: false,
      },
      {
        lessonTitle: "Exposes a Debug Method to Test Elements Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Jest Mock Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Abstract Variables Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Jest Mock Functions Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Generate Test Data Extra Credit Solution 3",
        isComplete: false,
      },
      {
        lessonTitle: "Allow for Overrides Extra Credit Solution 4",
        isComplete: false,
      },
      {
        lessonTitle: "Mocking HTTP Requests",
        isComplete: false,
      },
      {
        lessonTitle: "Mock Service Worker Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Mocked Responses Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Reuse Server Request Handlers Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Unhappy Path Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Use Inline Snapshots Extra Credit Solution 3",
        isComplete: false,
      },
      {
        lessonTitle: "Use One off Server Handlers Extra Credit Solution 4",
        isComplete: false,
      },
      {
        lessonTitle: "Mocking Browser APIs and Modules",
        isComplete: false,
      },
      {
        lessonTitle: "Mock Geolocation Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Act Function Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Mock the module Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Context and Custom Render Method",
        isComplete: false,
      },
      {
        lessonTitle: "Wrapper Component Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Dark Theme Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Render Method Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "App Test Utils Extra Credit Solution 3",
        isComplete: false,
      },
      {
        lessonTitle: "Testing Custom Hooks",
        isComplete: false,
      },
      {
        lessonTitle: "Test Functionality of Custom Hook Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Fake Component Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Setup Function Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle:
          "Using React Hooks Testing Library Extra Credit Solution 3",
        isComplete: false,
      },
      {
        lessonTitle: "Testing React Apps Outro",
        isComplete: false,
      },
    ],
  },
  {
    chapter: "React Suspense",
    chapterOrder: 8,
    lessons: [
      {
        lessonTitle: "React Suspense Welcome",
        isComplete: false,
      },
      {
        lessonTitle: "Concurrent Mode",
        isComplete: false,
      },
      {
        lessonTitle: "Simple Data Fetching",
        isComplete: false,
      },
      {
        lessonTitle: "React Suspense Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Handle Error with Error Boundary Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Make More Generic createResource Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Use utils Extra Credit Solution 3",
        isComplete: false,
      },
      {
        lessonTitle: "Render as You Fetch",
        isComplete: false,
      },
      {
        lessonTitle: "Refactor PokemonInfo Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Error Boundary Positioning Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "useTransition",
        isComplete: false,
      },
      {
        lessonTitle: "startTranistion and isPending Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Use CSS Transitions Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Avoid Flash of Loading Content Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Cache Resources",
        isComplete: false,
      },
      {
        lessonTitle: "Cache an Object Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Put Cache in Context Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Create a Context Provider Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Add Cache Timeout Extra Credit Solution 3",
        isComplete: false,
      },
      {
        lessonTitle: "Suspense Image",
        isComplete: false,
      },
      {
        lessonTitle: "Suspend an Image Component Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Avoid Waterfall Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Render as You Fetch Extra Credit Solution 2",
        isComplete: false,
      },
      {
        lessonTitle: "Suspense with a Custom Hook",
        isComplete: false,
      },
      {
        lessonTitle: "Create a Custom Suspense Hook Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Reuse Pre Built Hook Extra Credit Solution 1",
        isComplete: false,
      },
      {
        lessonTitle: "Coordinate Suspending Components with SuspenseList",
        isComplete: false,
      },
      {
        lessonTitle: "Load States Solution",
        isComplete: false,
      },
      {
        lessonTitle: "React Suspense Outro",
        isComplete: false,
      },
    ],
  },
  {
    chapter: "Build an Epic React App",
    chapterOrder: 9,
    lessons: [
      {
        lessonTitle: "Build an Epic React App Welcome",
        isComplete: false,
      },
      {
        lessonTitle: "Walkthrough of Project Setup",
        isComplete: false,
      },
      {
        lessonTitle: "Render a React App",
        isComplete: false,
      },
      {
        lessonTitle: "Render Logo and Title Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Use reach dialog Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Create a LoginForm Component Extra Credit Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Add Styles",
        isComplete: false,
      },
      {
        lessonTitle: "Style a Button with Variants Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Style Input and Formgroup Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Style with Emotion CSS Prop Solution 03",
        isComplete: false,
      },
      {
        lessonTitle: "Use the Emotion Macro Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle:
          "Use Colors and Media Queries File Extra Credit Solution 02",
        isComplete: false,
      },
      {
        lessonTitle:
          "Make a Loading Spinner Component Extra Credit Solution 03",
        isComplete: false,
      },
      {
        lessonTitle: "Make HTTP Requests",
        isComplete: false,
      },
      {
        lessonTitle: "Query Data with useEffect Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Query Data with useEffect Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Handle Failed Requests Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Use the useAsync Hook Extra Credit Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Authentication",
        isComplete: false,
      },
      {
        lessonTitle: "Wire up Authentication Solution",
        isComplete: false,
      },
      {
        lessonTitle: "User Data on Page Load Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Use useAsync Extra Credit Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Automatically Logout on 401 Extra Credit Solution 03",
        isComplete: false,
      },
      {
        lessonTitle: "Support Posting Data Extra Credit Solution 04",
        isComplete: false,
      },
      {
        lessonTitle: "Routing",
        isComplete: false,
      },
      {
        lessonTitle: "Handle Routing Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Handle URL Redirects Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle:
          "Add useMatch to Highlight the Active Nav Item Extra Credit Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Cache Management",
        isComplete: false,
      },
      {
        lessonTitle:
          "Create listItems with React Query useMutation Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "View listItems with React Query useQuery Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Remove listItems with useMutation Solution 03",
        isComplete: false,
      },
      {
        lessonTitle: "Update listItems with useMutations Solution 04",
        isComplete: false,
      },
      {
        lessonTitle: "View listItem Data in BookRow with useQuery Solution 05",
        isComplete: false,
      },
      {
        lessonTitle: "Update a Book Rating with useMutation Solution 06",
        isComplete: false,
      },
      {
        lessonTitle: "Refactor useAsync to useQuery Solution 07",
        isComplete: false,
      },
      {
        lessonTitle: "Load and Persist Book Data with useQuery Solution 08",
        isComplete: false,
      },
      {
        lessonTitle:
          "Query with useQuery for listItems in ListItemList Solution 09",
        isComplete: false,
      },
      {
        lessonTitle: "Clear queryCache on User Logout Solution 10",
        isComplete: false,
      },
      {
        lessonTitle:
          "Create useBookSearch Custom Hook Extra Credit Solution 01 01",
        isComplete: false,
      },
      {
        lessonTitle: "Create a useBook Custom Hook Extra Credit Solution 01 02",
        isComplete: false,
      },
      {
        lessonTitle:
          "Create useListItem s Custom Hook Extra Credit Solution 01 03",
        isComplete: false,
      },
      {
        lessonTitle:
          "Reuse Mutation Logic in a Custom Extra Credit Solution 01 04",
        isComplete: false,
      },
      {
        lessonTitle:
          "Reuse Custom Hooks to Reduce Code Extra Credit Solution 01 05",
        isComplete: false,
      },
      {
        lessonTitle:
          "Create and Remove Custom Hook Extra Credit Solution 01 06",
        isComplete: false,
      },
      {
        lessonTitle:
          "useMatch highlight active nav item Extra Credit Solution 02",
        isComplete: false,
      },
      {
        lessonTitle:
          "Show Error When Request Fails Extra Credit Solution 03 01",
        isComplete: false,
      },
      {
        lessonTitle:
          "React Query Custom Error Handling Extra Credit Solution 03 02",
        isComplete: false,
      },
      {
        lessonTitle:
          "Add a Loading Spinner for the Notes Extra Credit Solution 04",
        isComplete: false,
      },
      {
        lessonTitle: "Prefetch the Book Search Query Extra Credit Solution 05",
        isComplete: false,
      },
      {
        lessonTitle: "Add Books to the Query Cache Extra Credit Solution 06",
        isComplete: false,
      },
      {
        lessonTitle:
          "Add Optimistic Updates and Recovery Extra Credit Solution 07",
        isComplete: false,
      },
      {
        lessonTitle: "Context",
        isComplete: false,
      },
      {
        lessonTitle: "Create and Provide an AuthContext Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Grab a Value from Context in a Hook Solution 02",
        isComplete: false,
      },
      {
        lessonTitle:
          "Use Context Value in ListItem Hooks and AuthenticatedApp Solution 03",
        isComplete: false,
      },
      {
        lessonTitle:
          "Expose User Context Value to refetchBookSearchQuery Solution 04",
        isComplete: false,
      },
      {
        lessonTitle: "Create a useAuth Hook Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle:
          "Create an AuthProvider Component Extra Credit Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Colocate Global Providers Extra Credit Solution 03",
        isComplete: false,
      },
      {
        lessonTitle: "Create a useClient Hook Extra Credit Solution 04",
        isComplete: false,
      },
      {
        lessonTitle: "Compound Components",
        isComplete: false,
      },
      {
        lessonTitle: "Create Compound Components for a Flexible Modal Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Add callAll Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Create ModalContentsBase Extra Credit Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Performance",
        isComplete: false,
      },
      {
        lessonTitle: "Improve the Time to First Meaningful Paint Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Prefetch the Authenticated App Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Memoize Context Extra Credit Solution 02",
        isComplete: false,
      },
      {
        lessonTitle:
          "Custom React Profiler to Moninitor App Extra Credit Solution 03 01",
        isComplete: false,
      },
      {
        lessonTitle:
          "Add Metadata and Profile Book Screen Extra Credit Solution 03 02",
        isComplete: false,
      },
      {
        lessonTitle:
          "List Item List and Discover Sceen List Extra Credit Solution 03 03",
        isComplete: false,
      },
      {
        lessonTitle:
          "Add Profiling to Production Builds Extra Credit Solution 03 04",
        isComplete: false,
      },
      {
        lessonTitle: "Add Interaction Tracing Extra Credit Solution 04 01",
        isComplete: false,
      },
      {
        lessonTitle:
          "Profile All Updates in an Interaction Extra Credit Solution 04 02",
        isComplete: false,
      },
      {
        lessonTitle: "Render as You Fetch",
        isComplete: false,
      },
      {
        lessonTitle: "Fetch User before AuthProvider Mounts Solution",
        isComplete: false,
      },
      {
        lessonTitle: "Preload All Initial Data Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Unit Testing",
        isComplete: false,
      },
      {
        lessonTitle: "Test formatDate Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Set up a Server to Test Requests Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Test if a Request has an Auth Header Solution 03",
        isComplete: false,
      },
      {
        lessonTitle: "Client Request Config Overrides Solution 04",
        isComplete: false,
      },
      {
        lessonTitle:
          "POST by Default when Body Present and Stringified Solution 05",
        isComplete: false,
      },
      {
        lessonTitle:
          "Automatic Log Out on 401 Error Extra Credit Solution 01 01",
        isComplete: false,
      },
      {
        lessonTitle:
          "Ensure Promise Rejects on Error Extra Credit Solution 01 02",
        isComplete: false,
      },
      {
        lessonTitle: "Use setupTests js Extra Credit Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Testing Hooks and Components",
        isComplete: false,
      },
      {
        lessonTitle: "Modal Compound Components Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Set up useAsync Test with renderHook Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Wrap an act around an async Function Solution 03",
        isComplete: false,
      },
      {
        lessonTitle: "Add an async act to Resolve a Promise Solution 04",
        isComplete: false,
      },
      {
        lessonTitle: "Reset React State in a Test Solution 05",
        isComplete: false,
      },
      {
        lessonTitle: "Call Run with a Promise That Resolved Solution 06",
        isComplete: false,
      },
      {
        lessonTitle: "Can Specify an Initial State Solution 07",
        isComplete: false,
      },
      {
        lessonTitle: "Can Set the Data Solution 08",
        isComplete: false,
      },
      {
        lessonTitle: "No State Updates if Unmounted Solution 09",
        isComplete: false,
      },
      {
        lessonTitle: "Call run without Promise Errors Solution 10",
        isComplete: false,
      },
      {
        lessonTitle: "AHA Testing Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Integration Testing",
        isComplete: false,
      },
      {
        lessonTitle: "Render the Application with AppProviders Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Wait for Loading Element to Be Removed Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Reverse engineer AuthProvider and Log In Solution 03",
        isComplete: false,
      },
      {
        lessonTitle: "Render a Book Page in a Test Solution 04",
        isComplete: false,
      },
      {
        lessonTitle: "Test What UI Elements are Present Solution 05",
        isComplete: false,
      },
      {
        lessonTitle: "Isolate Tests by Cleaning up State and Cache Solution 06",
        isComplete: false,
      },
      {
        lessonTitle: "Create Mock msw Server Extra Credit Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Write Second Integration Test Extra Credit Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Abstract Functionality Extra Credit Solution 03 01",
        isComplete: false,
      },
      {
        lessonTitle: "Custom Render Function Extra Credit Solution 03 02",
        isComplete: false,
      },
      {
        lessonTitle: "Global Utils Extra Credit Solution 04",
        isComplete: false,
      },
      {
        lessonTitle:
          "Can Remove List Item for Book Extra Credit Solution 05 01",
        isComplete: false,
      },
      {
        lessonTitle: "Can Mark a List Item as Read Extra Credit Solution 05 02",
        isComplete: false,
      },
      {
        lessonTitle: "Can Edit a Note Extra Credit Solution 05 03",
        isComplete: false,
      },
      {
        lessonTitle: "Use Jest Fake Timers Extra Credit Solution 05 04",
        isComplete: false,
      },
      {
        lessonTitle:
          "Set up Mock Profiler for Tests Extra Credit Solution 05 05",
        isComplete: false,
      },
      {
        lessonTitle:
          "Create Component Specific Utility Extra Credit Solution 06",
        isComplete: false,
      },
      {
        lessonTitle: "Show Error when Load Fails Extra Credit Solution 07 01",
        isComplete: false,
      },
      {
        lessonTitle:
          "Scope Hooks to Describe Block Extra Credit Solution 07 02",
        isComplete: false,
      },
      {
        lessonTitle:
          "Update Failures are Displayed Extra Credit Solution 07 03",
        isComplete: false,
      },
      {
        lessonTitle: "E2E Testing",
        isComplete: false,
      },
      {
        lessonTitle: "Register a User in Cypress Solution 01",
        isComplete: false,
      },
      {
        lessonTitle: "Find and Add a Book to Reading List Solution 02",
        isComplete: false,
      },
      {
        lessonTitle: "Mark Book as Read and Rate Solution 03",
        isComplete: false,
      },
      {
        lessonTitle: "Remove Book from Reading List Solution 04",
        isComplete: false,
      },
      {
        lessonTitle: "Build an Epic React App Outro",
        isComplete: false,
      },
    ],
  },
];

export default async function addChapter(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    console.log("creating document");

    // for (let chapter of chaptersArray) {
    //   await Chapter.create(chapter);
    // }
    console.log("CREATED DOCUMENT");

    res.send("success");
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
