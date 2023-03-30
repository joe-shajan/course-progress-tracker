const fs = require("fs");

const obj = {
  "1. Welcome to Epic React": {
    "0001_Welcome_to_Epic_React": {
      isComplete: false,
    },
    "0002_Project_READMEs_and_Pre_Reqs": {
      isComplete: false,
    },
    "0003_Clone_and_Setup": {
      isComplete: false,
    },
    "0004_Running_the_Epic_React_Workshop_App": {
      isComplete: false,
    },
    "0005_File_Structure": {
      isComplete: false,
    },
    "0006_Running_Tests": {
      isComplete: false,
    },
    "0007_Example_Runthrough": {
      isComplete: false,
    },
  },
  "10. Epic React Expert Interviews": {
    "0351_Creating_Open_Source_Libraries_with_Tanner_Linsley": {
      isComplete: false,
    },
    "0352_Animations_and_Interactions_with_Josh_Comeau": {
      isComplete: false,
    },
    "0353_Next_js_and_Vercel_with_Guillermo_Rauch": {
      isComplete: false,
    },
    "0354_Building_React_based_Design_Systems_with_Ben_Ilegbodu": {
      isComplete: false,
    },
    "0355_The_React_Ecosystem_with_Tejas_Kumar": {
      isComplete: false,
    },
    "0356_Encapsulation_and_Styling_with_Michael_Chan": {
      isComplete: false,
    },
    "0357_3D_Animation_in_the_Browser_with_Paul_Henschel": {
      isComplete: false,
    },
    "0358_Best_Practices_for_Maintainers_with_Jenn_Creighton": {
      isComplete: false,
    },
    "0359_Breaking_into_Tech_with_Samantha_Bretous": {
      isComplete: false,
    },
    "0360_Best_Practices_of_Server_Side_Rendering_with_Monica_Powell": {
      isComplete: false,
    },
    "0361_Mock_Service_Worker_MSW_with_Artem_Zakharchenko": {
      isComplete: false,
    },
    "0362_React_and_React_Native_documentation_with_Rachel_Nabors": {
      isComplete: false,
    },
    "0363_React_Developer_Tools_with_Brian_Vaughn": {
      isComplete: false,
    },
  },
  "2. React Fundamentals": {
    "0008_React_Fundamentals_Welcome": {
      isComplete: false,
    },
    "0009_Basic_JS_Hello_World": {
      isComplete: false,
    },
    "0010_Generate_DOM_Nodes_Extra_Credit_Solution": {
      isComplete: false,
    },
    "0011_Generate_DOM_Nodes_Extra_Extra_Credit": {
      isComplete: false,
    },
    "0012_Intro_to_Raw_React_APIs": {
      isComplete: false,
    },
    "0013_Raw_React_APIs_Solution": {
      isComplete: false,
    },
    "0014_Nesting_Elements_Extra_Credit_Solution": {
      isComplete: false,
    },
    "0015_Break_Time": {
      isComplete: false,
    },
    "0016_Using_JSX": {
      isComplete: false,
    },
    "0017_Write_Markup_with_JSX_Solution": {
      isComplete: false,
    },
    "0018_Interpolate_className_and_Children_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0019_Spread_Props_Extra_Credit_Solution_02": {
      isComplete: false,
    },
    "0020_Creating_Custom_Components": {
      isComplete: false,
    },
    "0021_Render_JSX_From_Functions_Solution": {
      isComplete: false,
    },
    "0022_React_createElement_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0023_JSX_Extra_Credit_Solution_02": {
      isComplete: false,
    },
    "0024_Validation_with_PropTypes_Extra_Credit_Solution_03": {
      isComplete: false,
    },
    "0025_Use_prop_types_Package_Extra_Credit_Solution_04": {
      isComplete: false,
    },
    "0026_React_Fragments_Extra_Credit_Solution_05": {
      isComplete: false,
    },
    "0027_Styling": {
      isComplete: false,
    },
    "0028_style_Prop_Solution": {
      isComplete: false,
    },
    "0029_Create_a_Custom_Component_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0030_Accept_a_Size_Prop_to_Encapsulate_Styling_Extra_Credit_Solution_02": {
      isComplete: false,
    },
    "0031_Break_Time": {
      isComplete: false,
    },
    "0032_Forms": {
      isComplete: false,
    },
    "0033_Form_Basics": {
      isComplete: false,
    },
    "0034_Using_refs_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0035_Validate_lower_case_Extra_Credit_Solution_02": {
      isComplete: false,
    },
    "0036_Control_the_Input_Value_Extra_Credit_Solution_03": {
      isComplete: false,
    },
    "0037_Rendering_Arrays": {
      isComplete: false,
    },
    "0038_Render_Arrays_Solution": {
      isComplete: false,
    },
    "0039_Focus_demo_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0040_React_Fundamentals_Outro": {
      isComplete: false,
    },
  },
  "3. React Hooks": {
    "0041_React_Hooks_Welcome": {
      isComplete: false,
    },
    "0042_useState_greeting": {
      isComplete: false,
    },
    "0043_Set_State_in_React_Solution": {
      isComplete: false,
    },
    "0044_Set_Initial_Values_Through_Props_Extra_Credit_Solution": {
      isComplete: false,
    },
    "0045_useEffect_persistent_state": {
      isComplete: false,
    },
    "0046_localStorage_useEffect_Solution": {
      isComplete: false,
    },
    "0047_Lazy_State_Initialization_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0048_Effect_Dependencies_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0049_Custom_Hook_Extra_Credit_Solution_3": {
      isComplete: false,
    },
    "0050_Flexible_localStorage_Hook_Extra_Credit_Solution_4": {
      isComplete: false,
    },
    "0051_Hooks_Flow": {
      isComplete: false,
    },
    "0052_Lifting_state": {
      isComplete: false,
    },
    "0053_Lift_State_Solution": {
      isComplete: false,
    },
    "0054_Colocate_State_Extra_Credit_Solution": {
      isComplete: false,
    },
    "0055_useState_tic_tac_toe": {
      isComplete: false,
    },
    "0056_Managed_and_Derived_State_Solution": {
      isComplete: false,
    },
    "0057_Preserve_State_in_localStorage_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0058_useLocalStorageState_Custom_Hook_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0059_Add_Game_History_Feature_Extra_Credit_Solution_3": {
      isComplete: false,
    },
    "0060_Class_Refactor": {
      isComplete: false,
    },
    "0061_useRef_and_useEffect_DOM_interaction": {
      isComplete: false,
    },
    "0062_Solution": {
      isComplete: false,
    },
    "0063_Class_Refactor": {
      isComplete: false,
    },
    "0064_Break_Time": {
      isComplete: false,
    },
    "0065_useEffect_HTTP_requests": {
      isComplete: false,
    },
    "0066_Fetch_Data": {
      isComplete: false,
    },
    "0067_Handle_Errors_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0068_Use_a_status_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0069_Store_the_State_in_an_Object_Extra_Credit_Solution_3": {
      isComplete: false,
    },
    "0070_ErrorBoundary_Component_Extra_Credit_Solution_4": {
      isComplete: false,
    },
    "0071_Re_mount_the_ErrorBoundary_Extra_Credit_Solution_5": {
      isComplete: false,
    },
    "0072_Use_react_error_boundary_Extra_Credit_Solution_6": {
      isComplete: false,
    },
    "0073_Reset_the_ErrorBoundary_Extra_Credit_Solution_7": {
      isComplete: false,
    },
    "0074_use_resetKeys_Extra_Credit_Solution_8": {
      isComplete: false,
    },
    "0075_React_Hooks_Outro": {
      isComplete: false,
    },
  },
  "4. Advanced React Hooks": {
    "0076_Advanced_React_Hooks_Welcome": {
      isComplete: false,
    },
    "0077_useReducer_simple_Counter": {
      isComplete: false,
    },
    "0078_Simple_Counter_Solution": {
      isComplete: false,
    },
    "0079_Accept_Step_as_Action_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0080_setState_with_Object_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0081_Object_or_Function_Extra_Credit_Solution_3": {
      isComplete: false,
    },
    "0082_Traditional_Dispatch_Object_Extra_Credit_Solution_4": {
      isComplete: false,
    },
    "0083_useCallback_custom_hooks": {
      isComplete: false,
    },
    "0084_Extract_Logic_into_Hook_Solution": {
      isComplete: false,
    },
    "0085_useCallback_for_Memoization_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0086_Return_Memoized_run_Function_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0087_Make_safeDispatch_Extra_Credit_Solution_3": {
      isComplete: false,
    },
    "0088_useContext_simple_Counter": {
      isComplete: false,
    },
    "0089_CountProvider_Solution": {
      isComplete: false,
    },
    "0090_Create_a_Consumer_Hook_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0091_Caching_in_Context_Provider_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0092_useLayoutEffect_auto_growing_textarea": {
      isComplete: false,
    },
    "0093_useLayoutEffect_Solution": {
      isComplete: false,
    },
    "0094_useImperativeHandle_scroll_to_top_bottom": {
      isComplete: false,
    },
    "0095_Scroll_to_Top_Bottom_Solution": {
      isComplete: false,
    },
    "0096_useDebugValue_useMedia": {
      isComplete: false,
    },
    "0097_Label_useDebugValue_Solution": {
      isComplete: false,
    },
    "0098_Use_the_Format_Function_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0099_Advanced_React_Hooks_Outro": {
      isComplete: false,
    },
  },
  "5. Advanced React Patterns": {
    "0100_Advanced_React_Patterns_Welcome": {
      isComplete: false,
    },
    "0101_Context_Module_Functions": {
      isComplete: false,
    },
    "0102_Extract_Helper_Function_Solution": {
      isComplete: false,
    },
    "0103_Compound_Components": {
      isComplete: false,
    },
    "0104_Refactor_Toggle_Solution": {
      isComplete: false,
    },
    "0105_Support_DOM_Component_Children_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0106_Flexible_Compound_Components": {
      isComplete: false,
    },
    "0107_Extract_State_into_Context_Solution": {
      isComplete: false,
    },
    "0108_Custom_Hook_Validation_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0109_Prop_Collections_and_Getters": {
      isComplete: false,
    },
    "0110_Object_of_Props_Solution": {
      isComplete: false,
    },
    "0111_Prop_Getters_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0112_State_Reducer": {
      isComplete: false,
    },
    "0113_Inversion_of_Control_Solution": {
      isComplete: false,
    },
    "0114_Default_State_Reducer_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0115_State_Reducer_Action_Types_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0116_Control_Props": {
      isComplete: false,
    },
    "0117_Control_State_with_on_and_onChange_Solution": {
      isComplete: false,
    },
    "0118_Add_Read_Only_Warning_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0119_Add_a_Controlled_State_Warning_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0120_Extract_Warnings_to_a_Custom_Hook_Extra_Credit_Solution_3": {
      isComplete: false,
    },
    "0121_Don_t_Warn_in_Production_Extra_Credit_Solution_4": {
      isComplete: false,
    },
    "0122_Advanced_React_Patterns_Outro": {
      isComplete: false,
    },
  },
  "6. React Performance": {
    "0123_React_Performance_Welcome": {
      isComplete: false,
    },
    "0124_Code_Splitting": {
      isComplete: false,
    },
    "0125_Code_Split_Solution": {
      isComplete: false,
    },
    "0126_Eager_Loading_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0127_Webpack_Magic_Comments_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0128_Suspense_Position": {
      isComplete: false,
    },
    "0129_Coverage_Tool": {
      isComplete: false,
    },
    "0130_useMemo_for_Expensive_Calculations": {
      isComplete: false,
    },
    "0131_Wrap_a_Function_in_useMemo_Solution": {
      isComplete: false,
    },
    "0132_Production_Mode_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0133_getItems_Web_Worker_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0134_React_memo_for_Reducing_re_renders": {
      isComplete: false,
    },
    "0135_Memoize_Components_Solution": {
      isComplete: false,
    },
    "0136_Custom_Comparator_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0137_Primitive_Values_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0138_Window_Large_Lists_with_react_virtual": {
      isComplete: false,
    },
    "0139_Render_Large_Lists_Solution": {
      isComplete: false,
    },
    "0140_Optimize_Context_Value": {
      isComplete: false,
    },
    "0141_Memoize_Context_Value_Solution": {
      isComplete: false,
    },
    "0142_Separate_the_Contexts_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0143_Fix_Perf_Death_by_a_Thousand_Cuts": {
      isComplete: false,
    },
    "0144_Colocate_State_Solution": {
      isComplete: false,
    },
    "0145_Separate_Contexts_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0146_Consuming_Components_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0147_Slice_of_App_State_Extra_Credit_Solution_3": {
      isComplete: false,
    },
    "0148_Use_recoil_Extra_Credit_Solution_4": {
      isComplete: false,
    },
    "0149_Production_Performance_Monitoring": {
      isComplete: false,
    },
    "0150_Add_Performance_Monitoring_Solution": {
      isComplete: false,
    },
    "0151_Use_Trace_API_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0152_React_Performance_Outro": {
      isComplete: false,
    },
  },
  "7. Testing React Apps": {
    "0153_Testing_React_Apps_Welcome": {
      isComplete: false,
    },
    "0154_Simple_Test_with_ReactDOM": {
      isComplete: false,
    },
    "0155_Render_Counter_Component_Solution_1": {
      isComplete: false,
    },
    "0156_Test_Counter_Component_Solution_2": {
      isComplete: false,
    },
    "0157_Increment_and_Decrement_Buttons_Solution_3": {
      isComplete: false,
    },
    "0158_Cleaning_up_Test_Environments_Solution_4": {
      isComplete: false,
    },
    "0159_Add_use_dispatchEvent_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0160_Simple_Test_with_React_Testing_Library": {
      isComplete: false,
    },
    "0161_Rendering_Solution_1": {
      isComplete: false,
    },
    "0162_Firing_Events_Solution_2": {
      isComplete: false,
    },
    "0163_Accretions_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0164_Avoid_Implementation_Details": {
      isComplete: false,
    },
    "0165_Screen_Utility_Solution": {
      isComplete: false,
    },
    "0166_Browser_Interactions_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0167_Form_Testing": {
      isComplete: false,
    },
    "0168_Exposes_a_Debug_Method_to_Test_Elements_Solution_1": {
      isComplete: false,
    },
    "0169_Jest_Mock_Solution_2": {
      isComplete: false,
    },
    "0170_Abstract_Variables_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0171_Jest_Mock_Functions_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0172_Generate_Test_Data_Extra_Credit_Solution_3": {
      isComplete: false,
    },
    "0173_Allow_for_Overrides_Extra_Credit_Solution_4": {
      isComplete: false,
    },
    "0174_Mocking_HTTP_Requests": {
      isComplete: false,
    },
    "0175_Mock_Service_Worker_Solution_1": {
      isComplete: false,
    },
    "0176_Mocked_Responses_Solution_2": {
      isComplete: false,
    },
    "0177_Reuse_Server_Request_Handlers_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0178_Unhappy_Path_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0179_Use_Inline_Snapshots_Extra_Credit_Solution_3": {
      isComplete: false,
    },
    "0180_Use_One_off_Server_Handlers_Extra_Credit_Solution_4": {
      isComplete: false,
    },
    "0181_Mocking_Browser_APIs_and_Modules": {
      isComplete: false,
    },
    "0182_Mock_Geolocation_Solution_1": {
      isComplete: false,
    },
    "0183_Act_Function_Solution_2": {
      isComplete: false,
    },
    "0184_Mock_the_module_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0185_Context_and_Custom_Render_Method": {
      isComplete: false,
    },
    "0186_Wrapper_Component_Solution": {
      isComplete: false,
    },
    "0187_Dark_Theme_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0188_Render_Method_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0189_App_Test_Utils_Extra_Credit_Solution_3": {
      isComplete: false,
    },
    "0190_Testing_Custom_Hooks": {
      isComplete: false,
    },
    "0191_Test_Functionality_of_Custom_Hook_Solution": {
      isComplete: false,
    },
    "0192_Fake_Component_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0193_Setup_Function_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0194_Using_React_Hooks_Testing_Library_Extra_Credit_Solution_3": {
      isComplete: false,
    },
    "0195_Testing_React_Apps_Outro": {
      isComplete: false,
    },
  },
  "8. React Suspense": {
    "0196_React_Suspense_Welcome": {
      isComplete: false,
    },
    "0197_Concurrent_Mode": {
      isComplete: false,
    },
    "0198_Simple_Data_Fetching": {
      isComplete: false,
    },
    "0199_React_Suspense_Solution": {
      isComplete: false,
    },
    "0200_Handle_Error_with_Error_Boundary_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0201_Make_More_Generic_createResource_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0202_Use_utils_Extra_Credit_Solution_3": {
      isComplete: false,
    },
    "0203_Render_as_You_Fetch": {
      isComplete: false,
    },
    "0204_Refactor_PokemonInfo_Solution": {
      isComplete: false,
    },
    "0205_Error_Boundary_Positioning_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0206_useTransition": {
      isComplete: false,
    },
    "0207_startTranistion_and_isPending_Solution": {
      isComplete: false,
    },
    "0208_Use_CSS_Transitions_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0209_Avoid_Flash_of_Loading_Content_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0210_Cache_Resources": {
      isComplete: false,
    },
    "0211_Cache_an_Object_Solution": {
      isComplete: false,
    },
    "0212_Put_Cache_in_Context_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0213_Create_a_Context_Provider_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0214_Add_Cache_Timeout_Extra_Credit_Solution_3": {
      isComplete: false,
    },
    "0215_Suspense_Image": {
      isComplete: false,
    },
    "0216_Suspend_an_Image_Component_Solution": {
      isComplete: false,
    },
    "0217_Avoid_Waterfall_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0218_Render_as_You_Fetch_Extra_Credit_Solution_2": {
      isComplete: false,
    },
    "0219_Suspense_with_a_Custom_Hook": {
      isComplete: false,
    },
    "0220_Create_a_Custom_Suspense_Hook_Solution": {
      isComplete: false,
    },
    "0221_Reuse_Pre_Built_Hook_Extra_Credit_Solution_1": {
      isComplete: false,
    },
    "0222_Coordinate_Suspending_Components_with_SuspenseList": {
      isComplete: false,
    },
    "0223_Load_States_Solution": {
      isComplete: false,
    },
    "0224_React_Suspense_Outro": {
      isComplete: false,
    },
  },
  "9. Build an Epic React App": {
    "0225_Build_an_Epic_React_App_Welcome": {
      isComplete: false,
    },
    "0226_Walkthrough_of_Project_Setup": {
      isComplete: false,
    },
    "0227_Render_a_React_App": {
      isComplete: false,
    },
    "0228_Render_Logo_and_Title_Solution": {
      isComplete: false,
    },
    "0229_Use_reach_dialog_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0230_Create_a_LoginForm_Component_Extra_Credit_Solution_02": {
      isComplete: false,
    },
    "0231_Add_Styles": {
      isComplete: false,
    },
    "0232_Style_a_Button_with_Variants_Solution_01": {
      isComplete: false,
    },
    "0233_Style_Input_and_Formgroup_Solution_02": {
      isComplete: false,
    },
    "0234_Style_with_Emotion_CSS_Prop_Solution_03": {
      isComplete: false,
    },
    "0235_Use_the_Emotion_Macro_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0236_Use_Colors_and_Media_Queries_File_Extra_Credit_Solution_02": {
      isComplete: false,
    },
    "0237_Make_a_Loading_Spinner_Component_Extra_Credit_Solution_03": {
      isComplete: false,
    },
    "0238_Make_HTTP_Requests": {
      isComplete: false,
    },
    "0239_Query_Data_with_useEffect_Solution_01": {
      isComplete: false,
    },
    "0240_Query_Data_with_useEffect_Solution_02": {
      isComplete: false,
    },
    "0241_Handle_Failed_Requests_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0242_Use_the_useAsync_Hook_Extra_Credit_Solution_02": {
      isComplete: false,
    },
    "0243_Authentication": {
      isComplete: false,
    },
    "0244_Wire_up_Authentication_Solution": {
      isComplete: false,
    },
    "0245_User_Data_on_Page_Load_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0246_Use_useAsync_Extra_Credit_Solution_02": {
      isComplete: false,
    },
    "0247_Automatically_Logout_on_401_Extra_Credit_Solution_03": {
      isComplete: false,
    },
    "0248_Support_Posting_Data_Extra_Credit_Solution_04": {
      isComplete: false,
    },
    "0249_Routing": {
      isComplete: false,
    },
    "0250_Handle_Routing_Solution": {
      isComplete: false,
    },
    "0251_Handle_URL_Redirects_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0252_Add_useMatch_to_Highlight_the_Active_Nav_Item_Extra_Credit_Solution_02":
      {
        isComplete: false,
      },
    "0253_Cache_Management": {
      isComplete: false,
    },
    "0254_Create_listItems_with_React_Query_useMutation_Solution_01": {
      isComplete: false,
    },
    "0255_View_listItems_with_React_Query_useQuery_Solution_02": {
      isComplete: false,
    },
    "0256_Remove_listItems_with_useMutation_Solution_03": {
      isComplete: false,
    },
    "0257_Update_listItems_with_useMutations_Solution_04": {
      isComplete: false,
    },
    "0258_View_listItem_Data_in_BookRow_with_useQuery_Solution_05": {
      isComplete: false,
    },
    "0259_Update_a_Book_Rating_with_useMutation_Solution_06": {
      isComplete: false,
    },
    "0260_Refactor_useAsync_to_useQuery_Solution_07": {
      isComplete: false,
    },
    "0261_Load_and_Persist_Book_Data_with_useQuery_Solution_08": {
      isComplete: false,
    },
    "0262_Query_with_useQuery_for_listItems_in_ListItemList_Solution_09": {
      isComplete: false,
    },
    "0263_Clear_queryCache_on_User_Logout_Solution_10": {
      isComplete: false,
    },
    "0264_Create_useBookSearch_Custom_Hook_Extra_Credit_Solution_01_01": {
      isComplete: false,
    },
    "0265_Create_a_useBook_Custom_Hook_Extra_Credit_Solution_01_02": {
      isComplete: false,
    },
    "0266_Create_useListItem_s_Custom_Hook_Extra_Credit_Solution_01_03": {
      isComplete: false,
    },
    "0267_Reuse_Mutation_Logic_in_a_Custom_Extra_Credit_Solution_01_04": {
      isComplete: false,
    },
    "0268_Reuse_Custom_Hooks_to_Reduce_Code_Extra_Credit_Solution_01_05": {
      isComplete: false,
    },
    "0269_Create_and_Remove_Custom_Hook_Extra_Credit_Solution_01_06": {
      isComplete: false,
    },
    "0270_useMatch_highlight_active_nav_item_Extra_Credit_Solution_02": {
      isComplete: false,
    },
    "0271_Show_Error_When_Request_Fails_Extra_Credit_Solution_03_01": {
      isComplete: false,
    },
    "0272_React_Query_Custom_Error_Handling_Extra_Credit_Solution_03_02": {
      isComplete: false,
    },
    "0273_Add_a_Loading_Spinner_for_the_Notes_Extra_Credit_Solution_04": {
      isComplete: false,
    },
    "0274_Prefetch_the_Book_Search_Query_Extra_Credit_Solution_05": {
      isComplete: false,
    },
    "0275_Add_Books_to_the_Query_Cache_Extra_Credit_Solution_06": {
      isComplete: false,
    },
    "0276_Add_Optimistic_Updates_and_Recovery_Extra_Credit_Solution_07": {
      isComplete: false,
    },
    "0277_Context": {
      isComplete: false,
    },
    "0278_Create_and_Provide_an_AuthContext_Solution_01": {
      isComplete: false,
    },
    "0279_Grab_a_Value_from_Context_in_a_Hook_Solution_02": {
      isComplete: false,
    },
    "0280_Use_Context_Value_in_ListItem_Hooks_and_AuthenticatedApp_Solution_03":
      {
        isComplete: false,
      },
    "0281_Expose_User_Context_Value_to_refetchBookSearchQuery_Solution_04": {
      isComplete: false,
    },
    "0282_Create_a_useAuth_Hook_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0283_Create_an_AuthProvider_Component_Extra_Credit_Solution_02": {
      isComplete: false,
    },
    "0284_Colocate_Global_Providers_Extra_Credit_Solution_03": {
      isComplete: false,
    },
    "0285_Create_a_useClient_Hook_Extra_Credit_Solution_04": {
      isComplete: false,
    },
    "0286_Compound_Components": {
      isComplete: false,
    },
    "0287_Create_Compound_Components_for_a_Flexible_Modal_Solution": {
      isComplete: false,
    },
    "0288_Add_callAll_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0289_Create_ModalContentsBase_Extra_Credit_Solution_02": {
      isComplete: false,
    },
    "0290_Performance": {
      isComplete: false,
    },
    "0291_Improve_the_Time_to_First_Meaningful_Paint_Solution": {
      isComplete: false,
    },
    "0292_Prefetch_the_Authenticated_App_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0293_Memoize_Context_Extra_Credit_Solution_02": {
      isComplete: false,
    },
    "0294_Custom_React_Profiler_to_Moninitor_App_Extra_Credit_Solution_03_01": {
      isComplete: false,
    },
    "0295_Add_Metadata_and_Profile_Book_Screen_Extra_Credit_Solution_03_02": {
      isComplete: false,
    },
    "0296_List_Item_List_and_Discover_Sceen_List_Extra_Credit_Solution_03_03": {
      isComplete: false,
    },
    "0297_Add_Profiling_to_Production_Builds_Extra_Credit_Solution_03_04": {
      isComplete: false,
    },
    "0298_Add_Interaction_Tracing_Extra_Credit_Solution_04_01": {
      isComplete: false,
    },
    "0299_Profile_All_Updates_in_an_Interaction_Extra_Credit_Solution_04_02": {
      isComplete: false,
    },
    "0300_Render_as_You_Fetch": {
      isComplete: false,
    },
    "0301_Fetch_User_before_AuthProvider_Mounts_Solution": {
      isComplete: false,
    },
    "0302_Preload_All_Initial_Data_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0303_Unit_Testing": {
      isComplete: false,
    },
    "0304_Test_formatDate_Solution_01": {
      isComplete: false,
    },
    "0305_Set_up_a_Server_to_Test_Requests_Solution_02": {
      isComplete: false,
    },
    "0306_Test_if_a_Request_has_an_Auth_Header_Solution_03": {
      isComplete: false,
    },
    "0307_Client_Request_Config_Overrides_Solution_04": {
      isComplete: false,
    },
    "0308_POST_by_Default_when_Body_Present_and_Stringified_Solution_05": {
      isComplete: false,
    },
    "0309_Automatic_Log_Out_on_401_Error_Extra_Credit_Solution_01_01": {
      isComplete: false,
    },
    "0310_Ensure_Promise_Rejects_on_Error_Extra_Credit_Solution_01_02": {
      isComplete: false,
    },
    "0311_Use_setupTests_js_Extra_Credit_Solution_02": {
      isComplete: false,
    },
    "0312_Testing_Hooks_and_Components": {
      isComplete: false,
    },
    "0313_Modal_Compound_Components_Solution_01": {
      isComplete: false,
    },
    "0314_Set_up_useAsync_Test_with_renderHook_Solution_02": {
      isComplete: false,
    },
    "0315_Wrap_an_act_around_an_async_Function_Solution_03": {
      isComplete: false,
    },
    "0316_Add_an_async_act_to_Resolve_a_Promise_Solution_04": {
      isComplete: false,
    },
    "0317_Reset_React_State_in_a_Test_Solution_05": {
      isComplete: false,
    },
    "0318_Call_Run_with_a_Promise_That_Resolved_Solution_06": {
      isComplete: false,
    },
    "0319_Can_Specify_an_Initial_State_Solution_07": {
      isComplete: false,
    },
    "0320_Can_Set_the_Data_Solution_08": {
      isComplete: false,
    },
    "0321_No_State_Updates_if_Unmounted_Solution_09": {
      isComplete: false,
    },
    "0322_Call_run_without_Promise_Errors_Solution_10": {
      isComplete: false,
    },
    "0323_AHA_Testing_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0324_Integration_Testing": {
      isComplete: false,
    },
    "0325_Render_the_Application_with_AppProviders_Solution_01": {
      isComplete: false,
    },
    "0326_Wait_for_Loading_Element_to_Be_Removed_Solution_02": {
      isComplete: false,
    },
    "0327_Reverse_engineer_AuthProvider_and_Log_In_Solution_03": {
      isComplete: false,
    },
    "0328_Render_a_Book_Page_in_a_Test_Solution_04": {
      isComplete: false,
    },
    "0329_Test_What_UI_Elements_are_Present_Solution_05": {
      isComplete: false,
    },
    "0330_Isolate_Tests_by_Cleaning_up_State_and_Cache_Solution_06": {
      isComplete: false,
    },
    "0331_Create_Mock_msw_Server_Extra_Credit_Solution_01": {
      isComplete: false,
    },
    "0332_Write_Second_Integration_Test_Extra_Credit_Solution_02": {
      isComplete: false,
    },
    "0333_Abstract_Functionality_Extra_Credit_Solution_03_01": {
      isComplete: false,
    },
    "0334_Custom_Render_Function_Extra_Credit_Solution_03_02": {
      isComplete: false,
    },
    "0335_Global_Utils_Extra_Credit_Solution_04": {
      isComplete: false,
    },
    "0336_Can_Remove_List_Item_for_Book_Extra_Credit_Solution_05_01": {
      isComplete: false,
    },
    "0337_Can_Mark_a_List_Item_as_Read_Extra_Credit_Solution_05_02": {
      isComplete: false,
    },
    "0338_Can_Edit_a_Note_Extra_Credit_Solution_05_03": {
      isComplete: false,
    },
    "0339_Use_Jest_Fake_Timers_Extra_Credit_Solution_05_04": {
      isComplete: false,
    },
    "0340_Set_up_Mock_Profiler_for_Tests_Extra_Credit_Solution_05_05": {
      isComplete: false,
    },
    "0341_Create_Component_Specific_Utility_Extra_Credit_Solution_06": {
      isComplete: false,
    },
    "0342_Show_Error_when_Load_Fails_Extra_Credit_Solution_07_01": {
      isComplete: false,
    },
    "0343_Scope_Hooks_to_Describe_Block_Extra_Credit_Solution_07_02": {
      isComplete: false,
    },
    "0344_Update_Failures_are_Displayed_Extra_Credit_Solution_07_03": {
      isComplete: false,
    },
    "0345_E2E_Testing": {
      isComplete: false,
    },
    "0346_Register_a_User_in_Cypress_Solution_01": {
      isComplete: false,
    },
    "0347_Find_and_Add_a_Book_to_Reading_List_Solution_02": {
      isComplete: false,
    },
    "0348_Mark_Book_as_Read_and_Rate_Solution_03": {
      isComplete: false,
    },
    "0349_Remove_Book_from_Reading_List_Solution_04": {
      isComplete: false,
    },
    "0350_Build_an_Epic_React_App_Outro": {
      isComplete: false,
    },
  },
};

const dataArray = [];

Object.entries(obj).forEach(([key, values]) => {
  let chapter = key.split(".")[1].trimStart();
  let chapterOrder = +key.split(".")[0];
  let lessons = [];

  Object.entries(values).forEach(([lesson, values]) => {
    let lessonTitle = lesson.split("_").slice(1).join(" ");
    let isComplete = values.isComplete;

    let obj = {
      lessonTitle,
      isComplete,
    };
    lessons.push(obj);
  });

  let chapterObj = {
    chapter,
    chapterOrder,
    lessons,
  };

  dataArray.push(chapterObj);
});

const jsonString = JSON.stringify(dataArray, null, 2);

// Write the JSON string to a file
fs.writeFile("epic-react-lessons.json", jsonString, (err) => {
  if (err) {
    console.log("Error writing file", err);
  } else {
    console.log("Successfully wrote file");
  }
});
