import { RxHamburgerMenu } from "react-icons/rx";
import Box from "../components/Note";
import BoxContent from "../components/BoxContent";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styles from "./Mainsite_design.module.css";
import { useState } from "react";
import ProjectMContainer from "../components/WindowContent";
import BoxContent2 from "../components/BoxContent2";
const mainsite= () => {
  const [display_menue, setdisplay_menu] = useState(true);
  const handleButtonClick = () => {
    setdisplay_menu(true);
  };
  const boxData = {
    Box1: {
    collec: "/group-633.svg",
      updatedOutlineMessage: "/updatedOutlineMessage.svg",
       discussionSection: "12  discussionSection",
       styledFolder: "/ styledFolder.svg",
      files: "0 files",
      brainstorming: "Brainstorming",
      brainstormingBringsTeamMe: "Brainstorming brings team members' diverse experience into play. ",
      low: "Low",
    },
    Box2: {
      thinkerspace: "62px",
    collec: "/group-6331.svg",
  collecx_d: "44px",
      updatedOutlineMessage: "/updatedOutlineMessage1.svg",
       discussionSection: "10  discussionSection",
       styledFolder: "/ styledFolder1.svg",
      files: "3 files",
      brainstorming: "Research",
      brainstormingTop: "42.02px",
      propTop: "25.83px",
      brainstormingBringsTeamMe: "User research helps you to create an optimal product for users.",
      priorityLowTop: "13.93px",
      priorityLowLeft: "23.14px",
      priorityLowBackgroundColor: "rgba(216, 114, 125, 0.1)",
      low: "High",
      lowColor: "#d8727d",
      frame629x_d: "168px",
      framex_d: "98px",
      cardBrainstormingOverflow: "unset",
      cardBrainstormingFlexShrink: "unset",
      framex_d1: "56px",
      brainstormingBringsTeamMeColor: "#787486",
      priorityLowx_d: "39px",
    },
    Box3: {
      thinkerspace: "49px",
    collec: "/group-6332.svg",
  collecx_d: "63px",
      updatedOutlineMessage: "/updatedOutlineMessage2.svg",
       discussionSection: "2  discussionSection",
       styledFolder: "/ styledFolder2.svg",
      files: "0 files",
      brainstorming: "Wirefeilds",
      brainstormingTop: "47px",
      propTop: "19px",
      brainstormingBringsTeamMe: "Low fidelity wirefeilds include the most basic content and visuals.",
      priorityLowTop: "20px",
      priorityLowLeft: "20px",
      priorityLowBackgroundColor: "rgba(216, 114, 125, 0.1)",
      low: "High",
      lowColor: "#d8727d",
      frame629x_d: "162px",
      framex_d: "92px",
      cardBrainstormingOverflow: "unset",
      cardBrainstormingFlexShrink: "unset",
      framex_d1: "56px",
      brainstormingBringsTeamMeColor: "#787486",
      priorityLowx_d: "39px",
    },
    
    Box5: {
      thinkerspace: "37px",
      collec: "/group-6333.svg",
      collecx_d: "63px",
      updatedOutlineMessage: "/updatedOutlineMessage2.svg",
      discussionSection: "12  discussionSection",
      styledFolder: "/ styledFolder6.svg",
      files: "15 files",
      brainstorming: "Design System",
      brainstormingTop: "47px",
      propTop: "19px",
      brainstormingBringsTeamMe: "It just needs to adapt the UI from what you did before ",
      priorityLowTop: "20px",
      priorityLowLeft: "20px",
      priorityLowBackgroundColor: "rgba(131, 194, 157, 0.2)",
      low: "Completed",
      lowColor: "#68b266",
      frame629x_d: "174px",
      framex_d: "98px",
      cardBrainstormingOverflow: "hidden",
      cardBrainstormingFlexShrink: "0",
      framex_d1: "62px",
      brainstormingBringsTeamMeColor: "#0d062d",
      priorityLowx_d: "76px"
    },
    BoxContent2: {
       styledFolder: "/ styledFolder2.svg",
      updatedOutlineMessage: "/updatedOutlineMessage4.svg"
    },
  };

  const [feilds, setContainers] = useState({
    frame1: {
      id: 'frame1',
      boxes: ['Box1', 'Box2', 'Box3', 'Box5'],
    },
    frame2: {
      id: 'frame2',
      boxes: ['BoxContent', 'BoxContent2'],
    },
    frame3: {
      id: 'frame3',
      boxes: ['cardMobileappdesign'],
    },
  });

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const sourceContainerId = source.droppableId;
    const destinationContainerId = destination.droppableId;

    if (sourceContainerId === destinationContainerId) {
      const frame = feilds[sourceContainerId];
      const boxes = [...frame.boxes];
      const [removed] = boxes.splice(source.index, 1);
      boxes.splice(destination.index, 0, removed);

      const updatedContainers = {
        ...feilds,
        [sourceContainerId]: {
          ...frame,
          boxes
        }
      };

      setContainers(updatedContainers);
    } else {
      const sourceContainer = feilds[sourceContainerId];
      const destinationContainer = feilds[destinationContainerId];
      const sourceBoxes = [...sourceContainer.boxes];
      const destinationBoxes = [...destinationContainer.boxes];
      const [removed] = sourceBoxes.splice(source.index, 1);
      destinationBoxes.splice(destination.index, 0, removed);

      const updatedContainers = {
        ...feilds,
        [sourceContainerId]: {
          ...sourceContainer,
          boxes: sourceBoxes
        },
        [destinationContainerId]: {
          ...destinationContainer,
          boxes: destinationBoxes
        }
      };
      setContainers(updatedContainers);
    }
  };

  return (
    <div className={styles.desktop}>
      <ProjectMContainer display_menue={display_menue} setdisplay_menu={setdisplay_menu} />
      <div className={styles.mainWrap}>
        <div className={styles.navbar}>
          <div> {!display_menue && <RxHamburgerMenu className={styles.menu} size={25} color="rgb(195, 194, 202)" onClick={handleButtonClick} />} </div>
          <div className={styles.searchbar}>
            <img className={styles.searchicon} alt="" src="/searchicon.svg" />
            <input
              className={styles.searchbox}
              type="text"
              placeholder="Search for anything..."
            />
          </div>
          <div className={styles.rightNav}>
            <div className={styles.navicons}>
              <button className={styles.notification}>
                <img
                  className={styles.vuesaxlinearnotificationIcon}
                  alt=""
                  src="/vuesaxlinearnotification.svg"
                />
                <div className={styles.notificationChild} />
              </button>
              <button className={styles.messageQuestion}>
                <img
                  className={styles.vuesaxlinearnotificationIcon}
                  alt=""
                  src="/vuesaxlinearmessagequestion.svg"
                />
              </button>
              <button className={styles.calendar2}>
                <img
                  className={styles.vuesaxlinearnotificationIcon}
                  alt=""
                  src="/vuesaxlinearcalendar2.svg"
                />
              </button>
            </div>
            <div className={styles.profileContainer}>
              <button className={styles.frame}>
                <div className={styles.userDetails}>
                  <div className={styles.animaAgrawal}>Anima Agrawal</div>
                  <div className={styles.upIndia}>U.P, India</div>
                </div>
                <img
                  className={styles.profileimgIcon}
                  alt=""
                  src="/profileimg@2x.png"
                />
              </button>
              <button className={styles.arrowDown}>
                <img
                  className={styles.vuesaxlinearnotificationIcon}
                  alt=""
                  src="/arrowdown.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.currproject}>
          <div className={styles.header}>
            <div className={styles.projectDetails}>
              <div className={styles.mobileApp}>Mobile App</div>
              <div className={styles.btns}>
                <button className={styles.editbtn}>
                  <img
                    className={styles.vuesaxlinearnotificationIcon}
                    alt=""
                    src="/vuesaxlineararrowsquareup.svg"
                  />
                </button>
                <button className={styles.sharebtn}>
                  <img
                    className={styles.squareUpIcon}
                    alt=""
                    src="/squareup.svg"
                  />
                  <img
                    className={styles.shareLinkIcon}
                    alt=""
                    src="/sharelink.svg"
                  />
                </button>
              </div>
            </div>
            <div className={styles.peopleonline}>
              <button className={styles.vuesaxlinearaddSquareParent}>
                <img
                  className={styles.vuesaxlinearaddSquareIcon}
                  alt=""
                  src="/vuesaxlinearaddsquare.svg"
                />
                <div className={styles.invite}>Invite</div>
              </button>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/ellipse-12@2x.png"
                />
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/ellipse-13@2x.png"
                />
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/ellipse-15@2x.png"
                />
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="/ellipse-14@2x.png"
                />
                <div className={styles.ellipseDiv} />
                <div className={styles.div}>+2</div>
              </div>
            </div>
          </div>
          <div className={styles.options}>
            <div className={styles.filtersContainer}>
              <button className={styles.filterBtn}>
                <img
                  className={styles.vuesaxlinearfilterIcon}
                  alt=""
                  src="/vuesaxlinearfilter.svg"
                />
                <div className={styles.frame1}>
                  <div className={styles.filter}>Filter</div>
                  <img
                    className={styles.vuesaxlinearfilterIcon}
                    alt=""
                    src="/vuesaxoutlinearrowdown.svg"
                  />
                </div>
              </button>
              <button className={styles.dateBtn}>
                <img
                  className={styles.calendarIcon}
                  alt=""
                  src="/calendar.svg"
                />
                <div className={styles.frame2}>
                  <div className={styles.filter}>Today</div>
                  <img
                    className={styles.vuesaxlinearfilterIcon}
                    alt=""
                    src="/vuesaxoutlinearrowdown1.svg"
                  />
                </div>
              </button>
            </div>
            <div className={styles.otherOptions}>
              <button className={styles.shareBtn}>
                <img
                  className={styles.vuesaxlinearfilterIcon}
                  alt=""
                  src="/profileicon.svg"
                />
                <div className={styles.filter}>Share</div>
              </button>
              <img
                className={styles.otherOptionsChild}
                alt=""
                src="/vector-10.svg"
              />
              <div className={styles.frame3}>
                <button className={styles.vuesaxlinearmenu}>
                  <img
                    className={styles.vuesaxlinearnotificationIcon}
                    alt=""
                    src="/vuesaxlinearmenu.svg"
                  />
                </button>
                <button className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <img
                    className={styles.vuesaxlinearpauseIcon}
                    alt=""
                    src="/vuesaxlinearpause.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <DragDropContext onDragEnd={(result) => handleDragEnd(result, feilds)}>
            <div className={styles.cardContainers}>
              <div className={styles.todoContainer}>
                <div className={styles.header1}>
                  <div className={styles.toDo}>To Do</div>
                  <div className={styles.headerChild} />
                  <button className={styles.addbtn}>
                    <img
                      className={styles.vuesaxlinearnotificationIcon}
                      alt=""
                      src="/addbtn.svg"
                    />
                  </button>
                  <div className={styles.cardCount}>
                    <div className={styles.low}>{feilds.frame1.boxes.length}</div>
                  </div>
                </div>
                <img
                  alt=""
                  src="/vector-11.svg"
                />
                <Droppable droppableId={feilds.frame1.id}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {feilds.frame1.boxes.map((boxId, index) => (
                        <Draggable key={boxId} draggableId={boxId} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className={styles.frame_inner}>

                                {boxId === 'Box1' && (
                                  <Box {...boxData[boxId]} />
                                )}
                                {boxId === 'Box2' && (
                                  <Box {...boxData[boxId]} />
                                )}
                                {boxId === 'Box3' && (
                                  <Box {...boxData[boxId]} />
                                )}
                                {/* {boxId === 'Box4' && (
                                  <Box {...boxData[boxId]} />
                                )} */}
                                {boxId === 'Box5' && (
                                  <Box {...boxData[boxId]} />
                                )}
                                {boxId === 'BoxContent' && (
                                  <BoxContent />
                                )}
                                {boxId === 'BoxContent2' && (
                                  <BoxContent2 {...boxData[boxId]} />
                                )}
                                {boxId === 'BoxContent21' && (
                                  <BoxContent2 {...boxData[boxId]} />
                                )}
                                {boxId === 'cardMobileappdesign' && (
                                  <div className={styles.cardMobileappdesign}>
                                    <div className={styles.cardMobileappdesignChild} />
                                    <img
                                      className={styles.imgContainerIcon}
                                      alt=""
                                      src="/imgcontainer@2x.png"
                                    />
                                    <div className={styles.peopleMobileappd}>
                                      <img className={styles.frameIcon} alt="" src="/frame2.svg" />
                                      <button className={styles.frameParent}>
                                        <div className={styles.frame4}>
                                          <img
                                            className={styles.vuesaxlinearfilterIcon}
                                            alt=""
                                            src="/updatedOutlineMessage6.svg"
                                          />
                                          <div className={styles. discussionSection1}>12  discussionSection</div>
                                        </div>
                                        <div className={styles.frame5}>
                                          <img
                                            className={styles.vuesaxlinearfilterIcon}
                                            alt=""
                                            src="/ styledFolder5.svg"
                                          />
                                          <div className={styles. discussionSection1}>15 files</div>
                                        </div>
                                      </button>
                                    </div>
                                    <div className={styles.onboardingIllustrations}>
                                      Mobile App Design
                                    </div>
                                    <button className={styles.button}>. . .</button>
                                    <div className={styles.statusCompleted}>
                                      <div className={styles.low}>Completed</div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>

              </div>
              <div className={styles.onprogressContainer}>
                <div className={styles.header2}>
                  <div className={styles.toDo}>On Progress</div>
                  <div className={styles.cardCount1}>
                    <div className={styles.low}>{feilds.frame2.boxes.length}</div>
                  </div>
                  <div className={styles.headerItem} />
                </div>
                <img
                  className={styles.todoContainerChild}
                  alt=""
                  src="/vector-12.svg"
                />

                <Droppable droppableId={feilds.frame2.id}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {feilds.frame2.boxes.map((boxId, index) => (
                        <Draggable key={boxId} draggableId={boxId} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className={styles.frame_inner}>
                                {boxId === 'Box1' && (
                                  <Box {...boxData[boxId]} />
                                )}
                                {boxId === 'Box2' && (
                                  <Box {...boxData[boxId]} />
                                )}
                                {boxId === 'Box3' && (
                                  <Box {...boxData[boxId]} />
                                )}
                                {/* {boxId === 'Box4' && (
                                  <Box {...boxData[boxId]} />
                                )} */}
                                {boxId === 'Box5' && (
                                  <Box {...boxData[boxId]} />
                                )}
                                {boxId === 'BoxContent' && (
                                  <BoxContent />
                                )}
                                {boxId === 'BoxContent2' && (
                                  <BoxContent2 {...boxData[boxId]} />
                                )}
                                {boxId === 'BoxContent21' && (
                                  <BoxContent2 {...boxData[boxId]} />
                                )}
                                {boxId === 'cardMobileappdesign' && (
                                  <div className={styles.cardMobileappdesign}>
                                    <div className={styles.cardMobileappdesignChild} />
                                    <img
                                      className={styles.imgContainerIcon}
                                      alt=""
                                      src="/imgcontainer@2x.png"
                                    />
                                    <div className={styles.peopleMobileappd}>
                                      <img className={styles.frameIcon} alt="" src="/frame2.svg" />
                                      <button className={styles.frameParent}>
                                        <div className={styles.frame4}>
                                          <img
                                            className={styles.vuesaxlinearfilterIcon}
                                            alt=""
                                            src="/updatedOutlineMessage6.svg"
                                          />
                                          <div className={styles. discussionSection1}>12  discussionSection</div>
                                        </div>
                                        <div className={styles.frame5}>
                                          <img
                                            className={styles.vuesaxlinearfilterIcon}
                                            alt=""
                                            src="/ styledFolder5.svg"
                                          />
                                          <div className={styles. discussionSection1}>15 files</div>
                                        </div>
                                      </button>
                                    </div>
                                    <div className={styles.onboardingIllustrations}>
                                      Mobile App Design
                                    </div>
                                    <button className={styles.button}>. . .</button>
                                    <div className={styles.statusCompleted}>
                                      <div className={styles.low}>Completed</div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>

              </div>
              <div className={styles.doneContainer}>
                <div className={styles.header3}>
                  <div className={styles.done}>Done</div>
                  <div className={styles.headerInner} />
                  <div className={styles.cardCount2}>
                    <div className={styles.low}>{feilds.frame3.boxes.length}</div>
                  </div>
                </div>
                <img
                  className={styles.todoContainerChild}
                  alt=""
                  src="/vector-13.svg"
                />

                <Droppable droppableId={feilds.frame3.id}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {feilds.frame3.boxes.map((boxId, index) => (
                        <Draggable key={boxId} draggableId={boxId} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className={styles.frame_inner}>
                                {boxId === 'Box1' && (
                                  <Box {...boxData[boxId]} />
                                )}
                                {boxId === 'Box2' && (
                                  <Box {...boxData[boxId]} />
                                )}
                                {boxId === 'Box3' && (
                                  <Box {...boxData[boxId]} />
                                )}
                                {boxId === 'Box4' && (
                                  <Box {...boxData[boxId]} />
                                )}
                                {boxId === 'Box5' && (
                                  <Box {...boxData[boxId]} />
                                )}
                                {boxId === 'BoxContent' && (
                                  <BoxContent />
                                )}
                                {boxId === 'BoxContent2' && (
                                  <BoxContent2 {...boxData[boxId]} />
                                )}
                                {boxId === 'BoxContent21' && (
                                  <BoxContent2 {...boxData[boxId]} />
                                )}
                                {boxId === 'cardMobileappdesign' && (
                                  <div className={styles.cardMobileappdesign}>
                                    <div className={styles.cardMobileappdesignChild} />
                                    <img
                                      className={styles.imgContainerIcon}
                                      alt=""
                                      src="/imgcontainer@2x.png"
                                    />
                                    <div className={styles.peopleMobileappd}>
                                      <img className={styles.frameIcon} alt="" src="/frame2.svg" />
                                      <button className={styles.frameParent}>
                                        <div className={styles.frame4}>
                                          <img
                                            className={styles.vuesaxlinearfilterIcon}
                                            alt=""
                                            src="/updatedOutlineMessage6.svg"
                                          />
                                          <div className={styles. discussionSection1}>12  discussionSection</div>
                                        </div>
                                        <div className={styles.frame5}>
                                          <img
                                            className={styles.vuesaxlinearfilterIcon}
                                            alt=""
                                            src="/ styledFolder5.svg"
                                          />
                                          <div className={styles. discussionSection1}>15 files</div>
                                        </div>
                                      </button>
                                    </div>
                                    <div className={styles.onboardingIllustrations}>
                                      Mobile App Design
                                    </div>
                                    <button className={styles.button}>. . .</button>
                                    <div className={styles.statusCompleted}>
                                      <div className={styles.low}>Completed</div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>

              </div>
            </div>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default mainsite;
