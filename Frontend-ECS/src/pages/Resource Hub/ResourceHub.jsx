import React, { useEffect, useState } from 'react'
import ResHub from './svgs/ResHub'
import OptionPlate from './svgs/OptionPlate'
import { Link } from 'react-router-dom'
import { LuFileSpreadsheet } from "react-icons/lu";
import './ResHub.css'
import RadioButtonHigh from './svgs/RadioButtonHigh'
import StaggeredDropDownSub from '../../components/DropdownMenuSub'
import StaggeredDropDownSem from '../../components/DropdownMenuSem'
import { GiTireIronCross, GiWoodenClogs } from "react-icons/gi";

const ResourceHub = () => {
  const [disItem, setdisItem] = useState(false);
  const [currSem, setcurrSem] = useState(0);
  const [currSub, setCurrSub] = useState(0);
  useEffect(()=>{
    console.log(currSem)
  },[currSem])
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(true);
  };
  const files1 = [
    [{ name: "numerical.pdf", link: "https://drive.google.com/uc?export=download&id=1pRRsD4rfzQTEnJ9KmZmVu0eEoL2PnWHE" },
    { name: "Maths-notes.pdf", link: "https://drive.google.com/uc?export=download&id=1_fL1ZqFyihiAm4_3wbDFbQcTXQZeA27K" },
    { name: "complex_r.pdf", link: "https://drive.google.com/uc?export=download&id=1Z03L60Fyd-63DK-CGP4vIgWUxUyyaxRD" }],
    
    [{ name: "EC.pdf", link: "https://drive.google.com/uc?export=download&id=1Ny6gDiSDVvmqvUpqP2h_Uk3PfCDBaTAz" },
      { name: "L01-EC101.pdf", link: "https://drive.google.com/uc?export=download&id=1mZ_uKu9Rje7UzpVROMafLzSREssDD-pJ" },
      { name: "L02-EC101.pdf", link: "https://drive.google.com/uc?export=download&id=18qEC_Cb7E-hFfGgIl0XUyEXDUOazFzBB" },
      { name: "L03-EC101.pdf", link: "https://drive.google.com/file/d/1AYC59KePPdo3dYa14bJ_Der34j9U2QhV/view?usp=drive_link" },
      { name: "L04-EC101.pdf", link: "https://drive.google.com/uc?export=download&id=1THxUgQb1u_CqNSG4u7M8QBaX7eYZbdab" },
      { name: "L05-EC101.pdf", link: "https://drive.google.com/uc?export=download&id=1_fp7wHrADYImQ4UhHcfIA6a3KCoTf1iQ" },
      { name: "L06-EC101.pdf", link: "https://drive.google.com/uc?export=download&id=1gQo6Lr0_NOAurRu56_LeoTFvFUytpko5" },
      { name: "L07-EC101.pdf", link: "https://drive.google.com/uc?export=download&id=17VMgzUo4_9Ix4o55k0wkFVSep1y3nnaf" },
      { name: "L08-EC101.pdf", link: "https://drive.google.com/uc?export=download&id=1Pf6T0fm7vMiapJdzALQdZqDtaz2AAP6e" },
      { name: "L09-EC101.pdf", link: "https://drive.google.com/uc?export=download&id=1FEtfuvMKIU9ttT3hKlKP_584ssxa7wWd" },
      { name: "L010-EC101.pdf", link: "https://drive.google.com/uc?export=download&id=19S671WD9prIxaJToOtrbWPGJ7b5jX_8c" }],
      
      [{ name: "CS class Notes.pdf", link: "https://drive.google.com/uc?export=download&id=1F0GR1c1pX-syB5MF3zA6wYhTukS3T659" }],
      
      [{ name: "Water and It_s Treatment.pdf", link: "https://drive.google.com/uc?export=download&id=1eM_-LQ5NA6IUu4PPuRqpCeSIX-btYqq_" },
        { name: "Viva.pdf", link: "https://drive.google.com/uc?export=download&id=1J8xLdSB_C2dejKRjdWm_TIydWC6U20Ts" },
        { name: "PPts water treatment.pdf", link: "https://drive.google.com/uc?export=download&id=17gabRD1-7oeHwkmB54rbu334Apc5bcbj" },
        { name: "Polymers and Plastic.pdf", link: "https://drive.google.com/uc?export=download&id=1ernMg2dlNc5jCTlbVbWaojikj7pbpA7e" },
    { name: "Nanoparticles.pdf", link: "https://drive.google.com/uc?export=download&id=1sJQyElnp_OcZYwGbFcs725pBX0fqd2B-" },
    { name: "Nano Chemistry.pdf", link: "https://drive.google.com/uc?export=download&id=1D96qih2lr-hk06NSgTuBiycAI9r96HF8" },
    { name: "Lubricants.pdf", link: "https://drive.google.com/uc?export=download&id=1hgduA9vHPmbFfot68FJgRA1lRMR7Taqd" },
    { name: "Fuel and Coal.pdf", link: "https://drive.google.com/uc?export=download&id=16Y38TPJ08Fl_uhO7wrkOX1X28r35sNJ5" },
    { name: "Corrosion and air pollution.pdf", link: "https://drive.google.com/uc?export=download&id=1uJx87EPITsxf2-YOkgowtwGG-zWxEXAu" },
    { name: "Chemistry Notes - Polymers_Plastics.pdf", link: "https://drive.google.com/uc?export=download&id=18R4VGR-RbAMTx4mWwKmHM3vCYvbJl2kW" }],
    
    [{ name: "PART-4.pdf", link: "https://drive.google.com/uc?export=download&id=1r0VAr4Mg7wDf76H4qBeZmv_a7YrL6SB7" },
      { name: "PART-3.pdf", link: "https://drive.google.com/uc?export=download&id=10cu9-ilwzQBycLzbBIEYE3-ylEtLWkjJ" },
      { name: "PART-2.pdf", link: "https://drive.google.com/uc?export=download&id=16ZXi7wo4KBFi6SRCyeO6Mjdg__of0Zd4" },
      { name: "PART-1.pdf", link: "https://drive.google.com/uc?export=download&id=1uoJAuZ6Q8b_LQZo800VPGzP0MIBv6ykV" },
      { name: "Evs Textbook-2.pdf", link: "https://drive.google.com/uc?export=download&id=1lVaSUhFuDAeDzTpP8R8MqSqxTmxyDzoc" },
      { name: "Biodiversity E Bharucha.pdf", link: "https://drive.google.com/uc?export=download&id=1bLgduNwKRakB2a1rBgc9piDV_aHEDFXm" }
    ]
  ];

  const files2 = [
    [{ name: "Work and Energy Aishwarya", link: "https://drive.google.com/uc?export=download&id=14vQIc1rGgtowySA9v_Ar7qGQr8OUTxNr" },
      { name: "Virtual Work Mechanics.pdf", link: "https://drive.google.com/uc?export=download&id=12dLPUgG1uDwBmGMF10yd86KiMVuDRxyi" },
      { name: "tillTruss.pdf", link: "https://drive.google.com/uc?export=download&id=1OVY8xZbuhtMKoD9qMJ8v5dbO-OtIP1sP" },
      { name: "SHM Mechanics.pdf", link: "https://drive.google.com/uc?export=download&id=10Ulhc2mGXfmnd1x3PY985y7NoQAe-A93" },
      { name: "PrincipleVirtualWork.pdf", link: "https://drive.google.com/uc?export=download&id=1p66aLbATViFMB96_TBCyVohv_H_M7Lp_" },
      { name: "New DOC 2020-03-25 12.47.17.pdf", link: "https://drive.google.com/uc?export=download&id=1mpY33OU_cnOgZEov95hynuSeXqEt5_ri" },
      { name: "mid and end sem mechanics questions paper-1.pdf", link: "https://drive.google.com/uc?export=download&id=1oBhgQZdLVarDpUUMpNmwPHEOW3gcDMNU" },
      { name: "mechanics notes.pdf", link: "https://drive.google.com/uc?export=download&id=1JbdKXKK41P1BcmJYPXYRwdze7fVTXneI" },
      { name: "mechanics note of patnayak sir after mid sem.pdf", link: "https://drive.google.com/uc?export=download&id=1Sm8G2m3ykMVRdiynekGl3F7f4wV1zZcl" },
      { name: "Mechanics 7.pdf", link: "https://drive.google.com/uc?export=download&id=1cYjRx2TxPZzNs7ibxRHa39vBHCotFw7c" },
      { name: "Mechanics 6.pdf", link: "https://drive.google.com/uc?export=download&id=1LqHvk0lBxKzXt_tFxobudj0cJoKfFhYa" },
      { name: "Mechanics 5.pdf", link: "https://drive.google.com/uc?export=download&id=1ao5LMV3CEa6Jw57dkBMUPZAmfG3GrQ55" },
      { name: "Mechanics 4.pdf", link: "https://drive.google.com/uc?export=download&id=1ttjVTmlKG6cjVec-qKXqppyHNHFXV1Lz" },
      { name: "Mechanics 3.pdf", link: "https://drive.google.com/uc?export=download&id=1yBVC6fyJs1-EeVea_88Dg7V0OHtT0dB-" },
      { name: "Mechanics 2.pdf", link: "https://drive.google.com/uc?export=download&id=1Dt-49JvBjQqAK2-3BXbKzAGvUrqwTnqr" },
      { name: "Mechanics 1st year mid_sem.pdf", link: "https://drive.google.com/uc?export=download&id=1H_1JcM6VbtFDgmi8xFmThrYogdyBWjZ6" },
      { name: "Mechanics 1.pdf", link: "https://drive.google.com/uc?export=download&id=1GzuI1LocPjUVcBV85oV2-VrFhqzK5ohY" },
      { name: "Laws Of Motion Aishwarya.pdf", link: "https://drive.google.com/uc?export=download&id=1J1dDD6zUSTNYCaJrPAQcWMGrZ5yTx5ud" },
      { name: "Engineering Mechanics Notes.pdf", link: "https://drive.google.com/uc?export=download&id=1Bv6o0drS097jjXipF9UmwZRaija9hBPQ" },
      { name: "Dynamics Notes Aishwarya.pdf", link: "https://drive.google.com/uc?export=download&id=18G3JsZRf6YOTSUen0k89IcNcZHGNNtR5" },
      { name: "Doc- 21-Feb-2020.pdf", link: "https://drive.google.com/uc?export=download&id=1fag88uz-u9CZvftfgL0tQagMEVGxBeY7" },
      { name: "CG and MOI Mechanics.pdf", link: "https://drive.google.com/uc?export=download&id=1p6DiA-eWhiB20DQ1tsnjgQyXv1tz9P0v" },
      { name: "Beam Mechanics.pdf", link: "https://drive.google.com/uc?export=download&id=1MWgSRIS6U7h22lk_ovO0zwrqFNek4mfJ" }
    ],
    
    [{ name: "solid state physics-1.pdf", link: "https://drive.google.com/uc?export=download&id=1N11pRO8yIAMgwdJzySVnBER3btjzX262" },
      { name: "solid state notes aishwarya.pdf", link: "https://drive.google.com/uc?export=download&id=1iZqJXgdzQIN5hjteRjw1IqLExpcO9a_Y" },
      { name: "Quantum.pdf", link: "https://drive.google.com/uc?export=download&id=1u9UAaGQuKOKqNrsScjUIGj7x5QG7AEHU" },
      { name: "Quantum Mechanics.pdf", link: "https://drive.google.com/uc?export=download&id=1ha5_-zvp5EoMVSiOP0H3IeIJlXnvKTI0" },
      { name: "quantum mechanics-1.pdf", link: "https://drive.google.com/uc?export=download&id=1lzorBmc28DqfugYzWqRw-lUkTc8S88q8" },
      { name: "PHYSICS IMP QUESTIONS-1.pdf", link: "https://drive.google.com/uc?export=download&id=1pFvG4oap7crTh5g0UF3eRkhnTcNtGZfA" },
      { name: "Optics.pdf", link: "https://drive.google.com/uc?export=download&id=18KZ2hhFrwf2XZtNuOOKMnVEJbZiOxNGa" },
      { name: "EM Waves.pdf", link: "https://drive.google.com/uc?export=download&id=1hbOLeqW_50xdhvQHuugwTmC7-0aPc5Hq" },
      { name: "Electrodynamics by aditya.pdf", link: "https://drive.google.com/uc?export=download&id=15FZAZfrnTe7dWslc9zTAPJu4lIGFEX2W" },
    { name: "damped osc.pdf", link: "https://drive.google.com/uc?export=download&id=1BUm1abszh1jsgVFe9CPQuFqQ2tbOq3kt" },
  ],
  
  [{ name: "RP.docx", link: "https://docs.google.com/document/d/1FrHJ0bAN3iCac1mdyFGcQiXmiB2zPVIt/export?format=pdf" },
    { name: "RikkiTikkiTavi_Kipling.pdf", link: "https://drive.google.com/uc?export=download&id=1CSWfdLKyeOItycx3N_NSRKCBCWydT9mH" },
    { name: "Poems for students.docx", link: "https://docs.google.com/document/d/1_lMJdkTnBKUP7kQ-G6ZZ7nyLcBudrJQB/export?format=pdf" },
    { name: "one word substitutes.docx", link: "https://docs.google.com/document/d/1yWxwKMFqxuS5-H5rfOCaByUtgtXYctSg/export?format=pdf" },
    { name: "HS (phonemes).pdf", link: "https://drive.google.com/uc?export=download&id=1M87sKTZIbzc9lOFbxUVKKXoC9WLUzfbh" },
    { name: "HS (business communication).pdf", link: "https://drive.google.com/uc?export=download&id=1RbyupOOjPk_cGoVeHTppIbSIHIxXeqpE" },
    { name: "grammar.docx", link: "https://docs.google.com/document/d/188JFKkU_qy4x0zQId4vukZsFO-9XFMeO/export?format=pdf" },
    { name: "common errors.pdf", link: "https://drive.google.com/uc?export=download&id=1Fm7qVYy90V5wTTiuHLKlO68xemJ_U8nK" }
  ],
  
  [],
  
    [{ name: "Engineering Drawing by N.D. Bhatt.pdf", link: "https://drive.google.com/uc?export=download&id=1S-V_lUNs49fLezpLHRUrV8HcC_2B-RBg" }],
    
    [{ name: "multiple integral.pdf", link: "https://drive.google.com/uc?export=download&id=1JXgLoIK1ldjhnRNkq8GJki5EkhTUkagI" },
    { name: "MathsAssignments.pdf", link: "https://drive.google.com/uc?export=download&id=1iqV5HbLkuGso0_vL2jguf1-S070ihxM8" },
    { name: "Maths_Multiple_Integrals_Notes.pdf", link: "https://drive.google.com/uc?export=download&id=14ufuhFG0BT1RFkSpjiyFNqB8JXM1QztD" },
    { name: "maths part 1.pdf", link: "https://drive.google.com/uc?export=download&id=1o-F90QYEIBc_JgbaK2LCQCJUpbMhmrFQ" }
  ]
  ];
  
  const files3 = [
    [
      {
        name: "Wave Equation",
        link: "https://drive.google.com/uc?export=download&id=1-5_0qvijMcGLR6Bo8_HxqvkQ0vC14Zm6",
      },
      {
        name: "Fourier Series",
        link: "https://drive.google.com/uc?export=download&id=1-GqWM81zu7ZMXcJUDKUihdUeqdVmc76c",
      },
      {
        name: "Probability 1",
        link: "https://drive.google.com/uc?export=download&id=19Eu7qqDc9q7z4p-ersqxfS37vFOkEoJr",
      },
      {
        name: "Probability 2",
        link: "https://drive.google.com/uc?export=download&id=1NZmRDeigAbXZrMsIEPFtO8gy_Gc9KlTY",
      },
      {
        name: "Probability 3",
        link: "https://drive.google.com/uc?export=download&id=1poSApnlMVUWAlTu8CQZHKJg-JGGM7OC6",
      },
      {
        name: "Probability 4",
        link: "https://drive.google.com/uc?export=download&id=1viq4uNrMGIFJZXHffWm7WRjs19TDKn0M",
      },
    ],
    [
      {
        name: "Electronics Devices Part 1",
        link: "https://drive.google.com/uc?export=download&id=1V55-vsnCFGw9-8qFsTFnHHCQVhr_0dhy",
      },
      {
        name: "Electronics Devices Part 2",
        link: "https://drive.google.com/uc?export=download&id=1HOsX8-9q-ypErR6W7Q2X6MKKTN3A9jJK",
      },
      {
        name: "Electronics Devices Part 3",
        link: "https://drive.google.com/drive/folders/1ErXy1tAzcgXJ6ttK0UC9dU_KadFdcDQB?usp=drive_link",
      },
      {
        name: "Electronics Devices Part 4",
        link: "https://drive.google.com/uc?export=download&id=1gvqsrgJPXqFmcMmqK5Nj66QIBf3y9yht",
      },
    ],
    [],
    [
      {
        name: "ECE-203",
        link: "https://drive.google.com/uc?export=download&id=1dl-_r7pCxvVP__O5LtaedDvtEbiSbkQK",
      },
      {
        name: "Schaum of signal & system",
        link: "https://drive.google.com/uc?export=download&id=13ZQGoMvQY6H2ExS-xo0XbDG_1Rc7qrQQ",
      },
      {
        name: "ECE-203",
        link: "https://drive.google.com/uc?export=download&id=1dl-_r7pCxvVP__O5LtaedDvtEbiSbkQK",
      },
    ],
    [
      {
        name: "Part-1",
        link: "https://drive.google.com/uc?export=download&id=1_QTEKXqmj35y43NuqaAqvJwc01BVOHOk",
      },
      {
        name: "Part-2",
        link: "https://drive.google.com/uc?export=download&id=1wTH1ezjUZttnPTqEl0hSIbWOe390bUD3",
      },
      {
        name: "Part-3",
        link: "https://drive.google.com/uc?export=download&id=1GNxXkb0QKWXzLyi7qZmIktz93h1PHF9K",
      },
      {
        name: "Part-4",
        link: "https://drive.google.com/uc?export=download&id=1XDjwksPQSy7MXf87u7OKSCy_m1Toiiq1",
      },
      {
        name: "Part-5",
        link: "https://drive.google.com/uc?export=download&id=193L7cMqRRIz81R4j-CLM2hTr3geLeTuO",
      },
      {
        name: "Part-6",
        link: "https://drive.google.com/uc?export=download&id=1M559JNKbm2c11-74ZXoPnCG",
      },
      {
        name: "Part-7",
        link: "https://drive.google.com/uc?export=download&id=1OodjyT_oqrtW3g4K70q640M8kOMu3e4_",
      },
      {
        name: "Part-5",
        link: "https://drive.google.com/uc?export=download&id=1TOVrwInC0LrcVF8oFh93S8tKLdG0bUvC",
      },
      {
        name: "Passive filters",
        link: "https://drive.google.com/uc?export=download&id=1mbKW5SUXhq4t1Xe_h9CjYq0LYB6oY3AY",
      },
      {
        name: "Fourier analysis",
        link: "https://drive.google.com/uc?export=download&id=110E5GrsCtWDb_oRXbp6HSn0nzBsySxjG",
      },
    ],
    [
      {
        name: "Introduction 1",
        link: "https://drive.google.com/uc?export=download&id=1NQsLXtx33A4CVf9ADXMxrxwfgXIaLOIa",
      },
      {
        name: "Introduction 2",
        link: "https://drive.google.com/uc?export=download&id=1nL3t4YEq5Kn8SxiGfhoQigU62leVimVS",
      },
      {
        name: "Introduction 3",
        link: "https://drive.google.com/uc?export=download&id=1m_h55p1ScHw8XgmfYUTbfQZxbvaJlwer",
      },
      {
        name: "Introduction 4",
        link: "https://drive.google.com/uc?export=download&id=1Mz8g7Z_pw99UiGcnsB1kibyFyv7Ec2Eg",
      },
      {
        name: "Introduction 5",
        link: "https://drive.google.com/uc?export=download&id=1AJXwJ9AF-5F21iSs4W5CqO3Y_rWwrIhH",
      },
      {
        name: "Introduction 6",
        link: "https://drive.google.com/uc?export=download&id=1XD_PVjNXB9xbRgzwhPTXVJPsXPTWBMVW",
      },
      {
        name: "Introduction 7",
        link: "https://drive.google.com/uc?export=download&id=1XISWRgfvI5EM6Q3HUSI1thVr2Ao0x9Wc",
      },
      {
        name: "Introduction 8",
        link: "https://drive.google.com/uc?export=download&id=1EXpJJGUpYh0IWE8fSpIobOjn9spfB74g",
      },
      {
        name: "Introduction 9",
        link: "https://drive.google.com/uc?export=download&id=1BAqEKM55Klc5m3VB15BJCfWkGYCR95h2",
      },
      {
        name: "Link List",
        link: "https://drive.google.com/uc?export=download&id=1E5oF61Ra8_2Nf6EFb6XwHzA5wP7GNZwA",
      },
      {
        name: "Doubly Link List",
        link: "https://drive.google.com/uc?export=download&id=13RoYz6D868fpJkcAx6QpabJhAhPx5UgV",
      },
      {
        name: "Circular Link List",
        link: "https://drive.google.com/uc?export=download&id=16Ifs_E5b7mCAYPmK6yG8xHFcX_bAzfCJ",
      },
      {
        name: "Stack",
        link: "https://drive.google.com/uc?export=download&id=1lUxPi1zhArj6aw_m0-nZS6NSN2r9SOkw",
      },
      {
        name: "Queue",
        link: "https://drive.google.com/uc?export=download&id=1NRBFHZCH5XCsTRaGf_5DxNcop4x0vU08",
      },
      {
        name: "DSA NOTES",
        link: "https://drive.google.com/uc?export=download&id=1u0CY212BslSfTjrhAlOkKRR4aW7U00pt",
      },
    ]
  ];
  
  const files4 = [[
    { name: "Introductory Notes", link: "https://drive.google.com/uc?export=download&id=1JK8iEue6cUCXScAX8ogUei4Ckuvuc275" },
    {
      name: "Amplitude Modulation", link: "https://drive.google.com/uc?export=download&id=1VfB3mcFrkhrbbBXf2h-TpHh3y-c8Tjm5"
    }, {
      name: "An Introduction to Analog and Digital Communicatio… by Simon S. Haykin, Michael Moher", link: "https://drive.google.com/uc?export=download&id=1egqv_fOsAFTcMeT_qTTlWWn7ain9Wq-M",
    },
    {
      name: "Analog communication Midsem", link: "https://drive.google.com/uc?export=download&id=1lCKemcMyhNT8QcBIIbc91W9XBAQzZ7zz"
    }, {
      name: "Analog Random Process", link: "https://drive.google.com/uc?export=download&id=18LFPrIKP_TEBFifraiokaM2kJBMvT-6i"
    }, {
      name: "Fourier Analysis", link: "https://drive.google.com/uc?export=download&id=1iAWyH12qJl5DI_CvkAVmScCefKA25mqJ"
    }, {
      name: "Pulse Modulation", link: "https://drive.google.com/uc?export=download&id=1yM3YVwqPhCr01ooxRzHkn3il-iM0Mrxs"
    }, {
      name: "Noise Analog", link: "https://drive.google.com/uc?export=download&id=1DHEqkjcM2WdWhCIljTsu0AAPgV6sdcWW"
    }],
  [{ name: "Basic logic gates and Boolean functions", link: "https://drive.google.com/uc?export=download&id=157-qC2vK0u3I-NdDxsTrM6k9_VM8XPFD" }, { name: "Combinational Circuits", link: "https://drive.google.com/uc?export=download&id=1Ais2OzEdtUmIxWWINjlZ5Gw1S_cUjLQ_" }, { name: "Digital Electronics and Microprocessor", link: "https://drive.google.com/uc?export=download&id=1xcUjRU19DpGDIsoUq_ygsSsG_ebnDsWI" }, { name: "Digital", link: "https://drive.google.com/uc?export=download&id=1Nu-bs5OPSl4kNS0bcAW8-sRLSRNo4TNl" }, { name: "Introduction and Number System", link: "https://drive.google.com/uc?export=download&id=1sGhsYjn5VnQOGnlJbsNkmvPoJ_IAEyib" }],
  [{ name: "Notes1-control system", link: "https://drive.google.com/uc?export=download&id=1ToIrzF4w0gTma1sNuCDjkdYsi5LTVwe4" }, { name: "Control system midsem", link: "https://drive.google.com/uc?export=download&id=1VZZ4I1b7nP1KZ0aucTIBZakluMMOSM8i" }, { name: "book by Anand Kumar", link: "https://drive.google.com/uc?export=download&id=1mkyWp1G8ko32KXZOf_zK9BdcS-YnYdCW" }, { name: "Notes2-control system", link: "https://drive.google.com/uc?export=download&id=1YT7hksZPTa7k4j5sZbtDGRWX-bj-pw9s" }, { name: "Notes3-control system", link: "https://drive.google.com/uc?export=download&id=115xGJLxhi3Ayn2hZjrHaZOmy08E1pJNu" }, { name: "Notes4-control system", link: "https://drive.google.com/uc?export=download&id=11U9PEx3e0RgjRTmBw2PjToWqjdSTcHXZ" }, { name: "Notes5-control system", link: "https://drive.google.com/uc?export=download&id=1Dgr7oAC_lfOMczITPQdiQeqf7mP0HIVz" }, { name: "Notes6-control system", link: "https://drive.google.com/uc?export=download&id=1vYI9N5QVSVgXTIg6fvCf_W5KffRKcDmI" }, { name: "Notes7-control system", link: "https://drive.google.com/uc?export=download&id=1i4eLRx7qgezwDlFnhA_EkKmRsXb3kjXK" }, { name: "Notes8-control system", link: "https://drive.google.com/uc?export=download&id=1M4Q3DlXPrXji7TEb2yVuFgwQxGfIXZnN" }, { name: "Notes9-control system", link: "https://drive.google.com/uc?export=download&id=17VhyIM0gUT9nOtMbJzkzuuAgHuKPz2nm" }, { name: "Notes10-control system", link: "https://drive.google.com/uc?export=download&id=12lrFbJv-eppD2B9cuE-fi-okmLE3745i" }, { name: "Notes11-control system", link: "https://drive.google.com/uc?export=download&id=1IQTgUlAsub9UJqY1Gp1hDnHeOFmJ9ExM" }, { name: "Notes12-control system", link: "https://drive.google.com/uc?export=download&id=1iIonKGrHzBjHWo02U5AHjeXN60i92Ber" }, { name: "Notes13-control system", link: "https://drive.google.com/uc?export=download&id=1S5im4EbIHanZkFqpBI91w4KZDhQHH8Bv" }, { name: "Notes14-control system", link: "https://drive.google.com/uc?export=download&id=1tv7GQIldXN3t0OaQ1nnooD7B4hG9P-m8" }, { name: "Notes15-control system", link: "https://drive.google.com/uc?export=download&id=1xJFZfSAsob-ZDXI36ayl76Y0nQ8WLyFr" }, { name: "Notes16-control system", link: "https://drive.google.com/uc?export=download&id=1mrTJbWkIpazWsX90W-dLzZn22pQUi_OI" }
  ], 
  [
    { name: "Notes1-EC207", link: "https://drive.google.com/uc?export=download&id=1eT0u4zqhF5A6FGEDWvvyPIx1IdiaRF53" }, { name: "Notes2-EC207", link: "https://drive.google.com/uc?export=download&id=1EEke6YqyIfh-X2pzjlhAxFbIxvoSua74" }, { name: "NOTES3-EC207", link: "https://drive.google.com/uc?export=download&id=1yNpfwEgpmyuiaadPWY0WGs2RpCrODQP1" }, { name: "Notes4-EC207", link: "https://drive.google.com/uc?export=download&id=1A_YUOmpkJw_7K-ShXruIxzX0sCraSWCa" }, { name: "Notes5-EC207", link: "https://drive.google.com/uc?export=download&id=1VQm3LxucuQ2T6wtiEZRYhr-NU15qedpR" }
  ], 
  [{ name: "after midsem-EC208", link: "https://drive.google.com/uc?export=download&id=1KwGMeWnb0MeR1h3UcY1aemzSlMNj1GoU" }, { name: "Notes1-EC208", link: "https://drive.google.com/uc?export=download&id=1DiCkgg-NiCGhCKjA8Fv3FlKeVk_I32jc" }, { name: "Notes2-EC208", link: "https://drive.google.com/uc?export=download&id=1hM8svvCzYovt3WU2de3Gpa2LpiihvQov" }, { name: "Notes3-EC208", link: "https://drive.google.com/uc?export=download&id=15QmB3-9VRs4WFrXS2sRiEe5V0Av03AP8" }, { name: "Notes4-EC208", link: "https://drive.google.com/uc?export=download&id=1FsaknxsmEgelTF0FJFTpB7n2r4TiKUl_" }],
  [
    { name: "EMFT notes ", link: "https://drive.google.com/uc?export=download&id=1GneRhX-cpNeE0iOLg5rzNx4mJoKZyBep" }, { name: "Antenna Analysis-EC209", link: "https://drive.google.com/uc?export=download&id=1vdA1Eeu_Ov8rPiyKhiZNI5OWUWAPJzSo" }, { name: "Lecture Trassmission-EC209", link: "https://drive.google.com/uc?export=download&id=1r_81r24XKvBDvp_pgsU3eAITA0qF_70b" }, { name: "Solution manual-EC209", link: "https://drive.google.com/uc?export=download&id=1_sWoZZBfLlEYU8ucBbXpysZqqzhzcxyt" }, { name: "Wave propagation", link: "https://drive.google.com/uc?export=download&id=1dJy4XPa98MXO3uKvsvmOzGuLnbGA3m78" }, { name: "Notes-EC209", link: "https://drive.google.com/uc?export=download&id=1_NLFbgyRcYs7ZJRSwymrgqlqqIluon9e" }, { name: "Book by Sadiku-EC209", link: "https://drive.google.com/uc?export=download&id=1UqRLMQdG2ZH3zmsA_s6dO1NUGj-x8N5k" }
  ]];
  
  const files5 = [
    [
      {
        name: "Part 1",
        link: "https://drive.google.com/uc?export=download&id=1UlsuJJFSbTxJXvRkTWqtE1EFQxB32qIV",
      },
      {
        name: "Part 2",
        link: "https://drive.google.com/uc?export=download&id=15V93a0Y8HjHTAEsJSKRlpJNOpyvA3ksV",
      },
      {
        name: "Part 3",
        link: "https://drive.google.com/uc?export=download&id=1TkR3qPXS7mEro1zfrb5nTSVGQ6WzLbtE",
      },
      {
        name: "Part 4",
        link: "https://drive.google.com/uc?export=download&id=1clijSp3R_g1X8Ewd4jg4C-6KvS9WtMX4",
      },
      {
        name: "Part 5",
        link: "https://drive.google.com/uc?export=download&id=1otXiLBp_5kC6E8GccXwBLo1GqAjee3gL",
      },
      {
        name: "Part 6",
        link: "https://drive.google.com/uc?export=download&id=1D8opE0rh53-CQC_w2YtCqm6M9UBiok4A",
      },
      {
        name: "Part 7",
        link: "https://drive.google.com/uc?export=download&id=1ZyY6HQ_LJDdj1e0j5ytxB2NTkR3kJlku",
      },
      {
        name: "Part 8",
        link: "https://drive.google.com/uc?export=download&id=1Uj7gsdC7L4AwJGRaoLN8jhBT3C9H14z-",
      },
      {
        name: "Part 9",
        link: "https://drive.google.com/uc?export=download&id=1vvl5CSsybKMXEHD4A8x2E2GrvZ3RCvRA",
      },
      {
        name: "Part 10",
        link: "https://drive.google.com/uc?export=download&id=1z5xKTqEnU040UdljYauSnvBaM2uub8Kn",
      },
      {
        name: "Part 11",
        link: "https://drive.google.com/uc?export=download&id=1W8nUXiryoUFPKOnm9AFp9fJuphGYRJ0T",
      },
    ],
    [],
    [
      {
        name: "Part 1",
        link: "https://drive.google.com/uc?export=download&id=1tZ6hh9fLvrwJiwKm4XcYvdNBx7NRHKl_",
      },
      {
        name: "Part 2",
        link: "https://drive.google.com/uc?export=download&id=1Gf7YTawkcQcJ7tbxhD5sNrcuzh2zX-KA",
      },
      {
        name: "Part 3",
        link: "https://drive.google.com/uc?export=download&id=1y6kBfyHjkx5yYpJDoEPdK2QcB4-qHpSV",
      },
      {
        name: "Part 4",
        link: "https://drive.google.com/uc?export=download&id=1bdrSbLUWAPQI8ZHPA3ztRZPu0YEbq21v",
      },
      {
        name: "Part 5",
        link: "https://drive.google.com/uc?export=download&id=1a7o_9_u0U1IG-VsDJtingfDrcUi030BB",
      },
      {
        name: "Part 6",
        link: "https://drive.google.com/uc?export=download&id=1IjLUlC153Q1sj_0jXLhXegn3DnLwZXLQ",
      },
      {
        name: "Part 7",
        link: "https://drive.google.com/uc?export=download&id=1Ea270krrcs6sSY5PsWEugnVIEoqJmxAx",
      },
      {
        name: "Part 8",
        link: "https://drive.google.com/uc?export=download&id=1Setkdmrw9-q2_GULBq-KsZuL3MXYzoNC",
      },
      {
        name: "Part 9",
        link: "https://drive.google.com/uc?export=download&id=1DoHHVNuF84Vki1rcba5Zo6COJYtcJxNr",
      },
    ],
    [
      {
        name: "Part 1",
        link: "https://docs.google.com/presentation/d/15857FTJ4A9rPQyrCXqT2P81CS_1XITBv/export/pdf",
      },
      
      {
        name: "Part 2",
        link: "https://docs.google.com/presentation/d/1NwwIL1dH3wENzwP1JG-m50_TdWzEJjbr/export/pdf",
      },
      {
        name: "Part 3",
        link: "https://docs.google.com/presentation/d/17MKajPRgYu_GOfp_O_riI9UEF0sV-y3M/export/pdf",
      },
      {
        name: "Part 4",
        link: "https://docs.google.com/presentation/d/192Npsj4ty6_kRSNbC4K72KN8FvTvO68J/export/pdf",
      },
      {
        name: "Part 5",
        link: "https://drive.google.com/uc?export=download&id=12Wl3QhB8BY4ncAzb4fmXK79xFxdbRcfW",
      },
      {
        name: "Part 6",
        link: "https://drive.google.com/uc?export=download&id=1-TV-K6ijqWzGGFPBA3ob0isxfL5Sp-E2",
      },
      {
        name: "Part 8",
        link: "https://drive.google.com/uc?export=download&id=1VdcULe3YDMj5WOClj7ozNYmQMNZT5yCs",
      },
      {
        name: "Part 9",
        link: "https://drive.google.com/uc?export=download&id=1589EUVmeQrgkYfkQSUb9vQGM5ineaGsX",
      },
    ],
    [
      {
        name: "Part 1",
        link: "https://drive.google.com/uc?export=download&id=1hi3QRTgUgHuP-_cUSS-2WYWWfACKo5jG",
      },
      {
        name: "Part 2",
        link: "https://drive.google.com/uc?export=download&id=1DM-7zrnwOnZKkIRmLu4oB4QmSxGgRoz9",
      },
      {
        name: "Part 3",
        link: "https://drive.google.com/uc?export=download&id=18HDt3k3mNyhHrNVNQAeXOoSF6Ui6FmGN",
      },
      {
        name: "Part 4",
        link: "https://drive.google.com/uc?export=download&id=1XlZUL3azFw9N0l2gJFNKswHRsFTJZfB0",
      },
      {
        name: "Part 5",
        link: "https://drive.google.com/uc?export=download&id=1_3YKSlntu0E-PzQyQ5VF0xBqnu-WdfB3",
      },
      {
        name: "Part 6",
        link: "https://drive.google.com/uc?export=download&id=1mVtSX5suPHpXJaETyI5D0fjA0OL8lXcZ",
      },
      {
        name: "Part 7",
        link: "https://drive.google.com/uc?export=download&id=1NQ6uGzHDFnoCIvXBz6vD-S22zcbj7zal",
      },
      {
        name: "Part 8",
        link: "https://drive.google.com/uc?export=download&id=1-Ir_L9kkwmU-MrLFvsi_iMg_9XqYqOAE",
      },
      {
        name: "Part 9",
        link: "https://drive.google.com/uc?export=download&id=1SsEFF0F_vZkRZPX2jNlrUivfaZFEHQ5E",
      },
    ],
    [
      {
        name: "Part 1",
        link: "https://drive.google.com/uc?export=download&id=1MA6YDb5KDfiaxrYFB2jsLEYyumn0q0_W",
      },
      {
        name: "Part 2",
        link: "https://drive.google.com/uc?export=download&id=1iSg3vwsKfBKIkd9BFon6JlYp83-x-Ur_",
      },
      {
        name: "EC-306 ",
        link: "https://drive.google.com/uc?export=download&id=1Of5vqRPp_UaU6VuLNtFe-Ae4N_Bhsqe1",
      },
      {
        name: "John M senior Dean_Optical_Fiber ",
        link: "https://drive.google.com/uc?export=download&id=1ky3bdwVP_BVsTGLKK3dOnuXSTjr1V2EY",
      },
      {
        name: "Optical_Fiber Communication by JM senior ",
        link: "https://drive.google.com/uc?export=download&id=1H2U9TPiLiuB1bCcbQBdW351B-lvj5Zf2",
      },
    ],
  ];
  
  const files6 = [
    [{name: "waveguides 2.pdf", link: "https://drive.google.com/uc?id=1qlIw6VszzmXkC4N3w-1aYmJ4W5d0Ld4U&export=download"},
      {name: "waveguides 1.pdf", link: "https://drive.google.com/uc?id=1qrC0xLuc9HJ19Q3vCpm4DTJauVb4iZtv&export=download"},
      {name: "twocavityklystron.pptx", link: "https://docs.google.com/uc?id=1POAciW2ut2lCjWNE0sLAU1zbPbSGTu2z&export=download"},
      {name: "transmission lines 3.pdf", link: "https://drive.google.com/uc?id=1FTXGV3OF6DX1R5F0vChFIHPKXrPNQ5lL&export=download"},
      {name: "transmission lines 2.pdf", link: "https://drive.google.com/uc?id=1GHwc5GEuPhva1A39mfx9gJZg2oHBYJY3&export=download"},
      {name: "transmission lines 1.pdf", link: "https://drive.google.com/uc?id=1sMiOcRbp1Hyroh-ZlW3EGDQ8N2sH0PNV&export=download"},
      {name: "s-parameters.pdf", link: "https://drive.google.com/uc?id=166sZjiZtek5zqxKuCpdI0jSMBl4KQHSS&export=download"},
      {name: "planar structures.pdf", link: "https://drive.google.com/uc?id=1mIwXp66MZBtRkohdX5RgyCPLWTTJ0t_W&export=download"},
      {name: "Maxwell equations.pdf", link: "https://drive.google.com/uc?id=1qtCk755aZyvJw8C9V4o0OZzglVmRqIuh&export=download"},
      {name: "Introductory lecture.pdf", link: "https://drive.google.com/uc?id=1xUIGQ-Q8oh-7He4N-cUE7HVt0ICemVd0&export=download"},
    ],
    
    [],
    
    [{name: "vlsi notes.pdf", link: "https://drive.google.com/uc?id=13-qZk7KlEoz4XNBW7GHdCLhOz8_BeJZZ&export=download"},
    ],

    [{name: "Rectifiers.pdf", link: "https://drive.google.com/uc?id=1RxwIR5efjfGrXRVF4hLow7wKtI7qTX7j&export=download"},
      {name: "Power Mosfet.pdf", link: "https://drive.google.com/uc?id=1_608Rg_CwX0MG6OLxc4eK71A62YfQn-U&export=download"},
      {name: "Book.pdf", link: "https://drive.google.com/uc?id=1eZbQ3CX8m1cSD4VKCm2BxCKh-avXsnBJ&export=download"}
    ]

  ];
  
  const files7 = [
    [{ name: "wireless_L-8.pdf", link: "https://drive.google.com/uc?id=1O3EhdlTfFWQqD8Nd5TFbjo4zSGmiEPQh&export=download" },
      { name: "Wireless Communicaton.pdf", link: "https://drive.google.com/uc?id=12jEkaYPjXb-ehFlasYi3HRAgOCz_0pww&export=download" },
      { name: "Small scale fading.pdf", link: "https://drive.google.com/uc?id=1GXDcMSx5xHYo4bmewZzX8c8JOCTPKrD_&export=download" },
    { name: "Large scale path loss.pdf", link: "https://drive.google.com/uc?id=1U4mX30jr5WE2rDB0vdKKdEbe71XJbAk-&export=download" },
    { name: "L-9.pdf", link: "https://drive.google.com/uc?id=1rrxzSKp9u54FKIyiVd4pgkmqFSIqzKpx&export=download" },
    { name: "L-7.pdf", link: "https://drive.google.com/uc?id=1Txl5gEWdAQnF93mfCFAIBJLpbW4LzRq4&export=download" },
    { name: "L-5.pdf", link: "https://drive.google.com/uc?id=1AoeaZ6oK6VKorpCx2uyA2HOI5rDgEBaJ&export=download" },
    { name: "L-3-1.pdf", link: "https://drive.google.com/uc?id=1NR5yNwl13ckrqI4M8I7Ma9mvrd20yCGt&export=download" },
    { name: "L-8.pdf", link: "https://drive.google.com/uc?id=1A2p7yPbs_cvEilLeG8b3PdZnDa3lJBCK&export=download" },
    { name: "Intro to wireless comm", link: "https://drive.google.com/uc?id=14TVgbQqCT9BCDC2a7DInlTLtoasXYA8i&export=download" },
  ],
  
  [{ name: "Management studies syllabus.jpg", link: "" },
    { name: "OB Classs 1.pptx", link: "https://docs.google.com/uc?id=1T01AiRTiucY2anWUiuWv-Gztc_Pw8P7V&export=download" },
    { name: "OB Classs 2.pptx", link: "https://docs.google.com/uc?id=1mPon_IdwjgnpBJGmiIvWNVpsZX3Jmjgd&export=download" },
    { name: "OB Classs 3.pptx", link: "https://docs.google.com/uc?id=1YYDwUcmcZ6nr8SR75Czmesc1HCgUR4ya&export=download" },
    { name: "OB Classs 4.pptx", link: "https://docs.google.com/uc?id=1YYDwUcmcZ6nr8SR75Czmesc1HCgUR4ya&export=download" },
    { name: "OB Classs 5.pptx", link: "https://docs.google.com/uc?id=15aCbOkgyVR5dteIhBRTZKzepy1FOZeim&export=download" },
    { name: "OB Classs 6.pptx", link: "https://docs.google.com/uc?id=19ipylI4L098ZZe7qbqtBAv0YCVAc1uB7&export=download" },
    { name: "OB Classs 7.pptx", link: "https://docs.google.com/uc?id=1_NI0Tphcmm26D-_0ysjAsQj8W99OLZio&export=download" },
    { name: "OB Classs 8.pptx", link: "https://docs.google.com/uc?id=1JZWhaHx9akkdQ5h7Qh8F-GfvPEgsFtSS&export=download" },
  ]
];

const files8 = [
  [{ name: "End Sem-EC-1444-Mobile Comm.pdf", link: "https://drive.google.com/uc?id=1y29BKPt1rEp57bIDy57w_XZtwAKMDouW&export=download" },
    { name: "END B.TECH HCI.docx", link: "https://docs.google.com/document/d/1JT5BQK0V1_IwsuzG9h-mdheDJ8AgjNQG/edit" },
    { name: "Elective Syllabus.docx", link: "https://docs.google.com/document/d/1y58BB9k2LhrMZzq72XWZEWUGvswhv4ea/edit" },
    { name: "EC1455.pdf", link: "https://docs.google.com/document/d/1GnjaHMTDS-zL3obi6HoKJ6XI57CqI8GC/edit" },
    { name: "EC1467.pdf", link: "https://drive.google.com/uc?id=1irdfMtnKqGyaEEBu48e0PFI1QHnG_tWA&export=download" },
    { name: "AC.pdf", link: "https://drive.google.com/uc?id=1VsMm6KdM2CStqEI3jMCnw-J4_Ax-MH6O&export=download" }
  ],
];
const [files, setFiles] = useState(files1);

const subjects = [
  
  [
    "Mathematics I",
      "Basic Electronics",
      "Introduction to Computing",
      "Chemistry",
      "Environmental Chemistry",
    ],

    ["Engineering Mechanics",
      "Physics",
      "Communicative English",
      "Basic Electrical Engineering",
      "Engineering Graphics & Design",
      "Mathematics II"]
    ,
    ["Mathematics III",
      "Electronics Devices",
      "Analog Electronics",
      "Signal & Systems",
      "Netwok Analysis & Synthesis",
      "Data Structures & Algorithms"]
    ,
    [
      "Analog Communication",
      "Digital Electronic Circuits",
      "Control Systems",
      "Probability & Random Process",
      "Electrical & Electronic Materials",
      "Electromagnetic Field & Wave Propagation",
    ],
    [
      "Digital Communication",
      "Microprocessor & Microcontrollers",
      "Analog Integrated Circuits & Technology",
      "Digital Signal Processing",
      "Measurements & Instrumentations",
      "Principles of Optoelectrinics & Optical Fibres"
    ],
    [
      "RF & Microwave Engineering",
      "Data Communication and Network",
      "VLSI Design",
      "Power Electronics",
    ],
    [
      "Wireless Communication",
      "Engineering Economics/Management Studies",
    ],
    [
      "PYQs"
    ]
  ]

  const [subs, setSubs] = useState([]);

  useEffect(() => {
    setSubs(subjects[currSem]);

    switch (currSem) {
      case 0:
        setFiles(files1);
        break;
      case 1:
        setFiles(files2);
        break;
      case 2:
        setFiles(files3);
        break;
      case 3:
        setFiles(files4);
        break;
      case 4:
        setFiles(files5);
        break;
      case 5:
        setFiles(files6);
        break;
      case 6:
        setFiles(files7);
        break;
      case 7:
        setFiles(files8);
        break;
    }

  }, [currSem]);

  return (<div className='flex flex-col gap-5 pb-20'>
    <ResHub />
    <div className='pcmd:flex-col flex justify-around items-center w-full h-full'>
      <div className={`display-item overflow-y-scroll mt-10 ${disItem ? 'visible relative' : 'absolute invisible'}`}>
        <div>
          {files[currSub].map((file, index) => (
            <div
              key={index}
              className="h-max w-full p-[4vh] mb-[1vh] flex"
            >
              <LuFileSpreadsheet className="text-[8vh]" />
              <a
                className="my-auto hover:underline hover:text-[#33FCFF]"
                href={file.link}
                rel="noopener noreferrer"
              >
                <h2 className="ml-[2vw] text-[3vh]">{file.name}</h2>
              </a>
            </div>
          ))}
        </div>
        <button className={`absolute top-6 right-6`} onClick={() => {
          setdisItem(false);
        }}><GiTireIronCross size={24} /></button>
      </div>
      <div className="left-content pcmd:w-full pcmd:h-full pcmd:flex-row w-1/6 flex flex-col items-center">

        <ul className='flex flex-col h-full items-end  justify-around text-center text-wrap gap-y-4 pb-4 pt-4 desktopView'>
          <li onClick={() => { setcurrSem(0), handleClick() }} className={`${currSem === 0 ? 'text-[#33FCFF] underline' : ''}`}><Link>Ist    Sem</Link></li>
          <li onClick={() => { setcurrSem(1), handleClick() }} className={`${currSem === 1 ? 'text-[#33FCFF] underline' : ''}`}><Link>IInd   Sem</Link></li>
          <li onClick={() => { setcurrSem(2), handleClick() }} className={`${currSem === 2 ? 'text-[#33FCFF] underline' : ''}`}><Link>IIIrd  Sem</Link></li>
          <li onClick={() => { setcurrSem(3), handleClick() }} className={`${currSem === 3 ? 'text-[#33FCFF] underline' : ''}`}><Link>IVth   Sem</Link></li>
          <li onClick={() => { setcurrSem(4), handleClick() }} className={`${currSem === 4 ? 'text-[#33FCFF] underline' : ''}`}><Link>Vth    Sem</Link></li>
          <li onClick={() => { setcurrSem(5), handleClick() }} className={`${currSem === 5 ? 'text-[#33FCFF] underline' : ''}`}><Link>VIth   Sem</Link></li>
          <li onClick={() => { setcurrSem(6), handleClick() }} className={`${currSem === 6 ? 'text-[#33FCFF] underline' : ''}`}><Link>VIIth  Sem</Link></li>
          <li onClick={() => { setcurrSem(7), handleClick() }} className={`${currSem === 7 ? 'text-[#33FCFF] underline' : ''}`}><Link>VIIIth Sem</Link></li>
        </ul>
        <div className='pcmd:flex pcmd:justify-around pcmd:w-full mobileView z-10'>
          <ul className='pcmd:m-0 pcmd:p-0  flex flex-col h-full items-end  justify-around text-center text-wrap gap-y-4 pb-4 pt-4 mobileView'>
            <StaggeredDropDownSem setcurrSem={setcurrSem} setCurrSub={setCurrSub} currSem={currSem} handleClick={handleClick} />
          </ul>
          <ul className='pcmd:m-0 pcmd:p-0  flex flex-col h-full items-end  justify-around text-center text-wrap gap-y-4 pb-4 pt-4 mobileView'>
            <StaggeredDropDownSub setCurrSub={setCurrSub} currSem={currSem}  subjects={subjects[currSem]} handleClick={[handleClick]} />
          </ul>

        </div>
      </div>
      <div className="middle-content justify-center flex flex-col ">
        <div className='contentPlate flex mobile:p-10 pl-10 pr-5 justify-between  '>
          <div className="50L flex flex-col justify-center ml-5">
            <div className="paper  desktopView">


            </div>
            <div className="paper mobileView">
              
            </div>
          </div>
          <div className="50r flex flex-col justify-end">

            <div className="book-Option" ><svg className='optionButton' onClick={() => {
              setdisItem(true);
            }} width="301" height="85" viewBox="0 0 301 85" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_367_824)">
                <g filter="url(#filter1_b_367_824)">
                  <path className='buttonBody' d="M116.999 20.5L123.999 25.7264L273 25.7264L280.015 31.5L280.015 49.5002L278 52L278 62.9999L264 62.9999L261 64.9999L28.3696 65L20.7506 57.4815L20.7506 38.0806L22.9995 36.5L22.9995 29L28.9995 22.5L34.9995 22.5L37.4995 20.5L116.999 20.5Z" fill="url(#paint0_linear_367_824)" />
                </g>
                <path d="M94.3108 51.5V37.5H100.491C101.451 37.5 102.264 37.64 102.931 37.92C103.597 38.1867 104.097 38.58 104.431 39.1C104.777 39.6067 104.951 40.22 104.951 40.94C104.951 41.74 104.751 42.4133 104.351 42.96C103.964 43.5067 103.397 43.8733 102.651 44.06L102.611 43.68C103.237 43.8133 103.777 44.0467 104.231 44.38C104.697 44.7133 105.057 45.1267 105.311 45.62C105.564 46.1 105.691 46.6467 105.691 47.26C105.691 47.9667 105.571 48.5867 105.331 49.12C105.091 49.64 104.744 50.08 104.291 50.44C103.837 50.8 103.304 51.0667 102.691 51.24C102.091 51.4133 101.424 51.5 100.691 51.5H94.3108ZM97.5108 48.66H100.571C100.944 48.66 101.257 48.6 101.511 48.48C101.777 48.36 101.984 48.1867 102.131 47.96C102.277 47.72 102.351 47.4333 102.351 47.1C102.351 46.7933 102.271 46.5333 102.111 46.32C101.964 46.1067 101.751 45.9467 101.471 45.84C101.191 45.72 100.857 45.66 100.471 45.66H97.5108V48.66ZM97.5108 43.12H100.011C100.357 43.12 100.651 43.0667 100.891 42.96C101.144 42.84 101.331 42.68 101.451 42.48C101.584 42.2667 101.651 42.0133 101.651 41.72C101.651 41.2933 101.504 40.96 101.211 40.72C100.917 40.4667 100.477 40.34 99.8908 40.34H97.5108V43.12ZM112.975 51.7C111.868 51.7 110.881 51.46 110.015 50.98C109.161 50.5 108.481 49.8467 107.975 49.02C107.481 48.1933 107.235 47.2467 107.235 46.18C107.235 45.1133 107.481 44.1667 107.975 43.34C108.481 42.5133 109.161 41.86 110.015 41.38C110.881 40.9 111.868 40.66 112.975 40.66C114.081 40.66 115.061 40.9 115.915 41.38C116.781 41.86 117.461 42.5133 117.955 43.34C118.448 44.1667 118.695 45.1133 118.695 46.18C118.695 47.2467 118.448 48.1933 117.955 49.02C117.461 49.8467 116.781 50.5 115.915 50.98C115.061 51.46 114.081 51.7 112.975 51.7ZM112.975 48.94C113.455 48.94 113.881 48.82 114.255 48.58C114.628 48.34 114.921 48.0133 115.135 47.6C115.348 47.1867 115.448 46.7133 115.435 46.18C115.448 45.6467 115.348 45.1733 115.135 44.76C114.921 44.3333 114.628 44 114.255 43.76C113.881 43.52 113.455 43.4 112.975 43.4C112.495 43.4 112.061 43.52 111.675 43.76C111.301 44 111.008 44.3333 110.795 44.76C110.581 45.1733 110.481 45.6467 110.495 46.18C110.481 46.7133 110.581 47.1867 110.795 47.6C111.008 48.0133 111.301 48.34 111.675 48.58C112.061 48.82 112.495 48.94 112.975 48.94ZM125.787 51.7C124.681 51.7 123.694 51.46 122.827 50.98C121.974 50.5 121.294 49.8467 120.787 49.02C120.294 48.1933 120.047 47.2467 120.047 46.18C120.047 45.1133 120.294 44.1667 120.787 43.34C121.294 42.5133 121.974 41.86 122.827 41.38C123.694 40.9 124.681 40.66 125.787 40.66C126.894 40.66 127.874 40.9 128.727 41.38C129.594 41.86 130.274 42.5133 130.767 43.34C131.261 44.1667 131.507 45.1133 131.507 46.18C131.507 47.2467 131.261 48.1933 130.767 49.02C130.274 49.8467 129.594 50.5 128.727 50.98C127.874 51.46 126.894 51.7 125.787 51.7ZM125.787 48.94C126.267 48.94 126.694 48.82 127.067 48.58C127.441 48.34 127.734 48.0133 127.947 47.6C128.161 47.1867 128.261 46.7133 128.247 46.18C128.261 45.6467 128.161 45.1733 127.947 44.76C127.734 44.3333 127.441 44 127.067 43.76C126.694 43.52 126.267 43.4 125.787 43.4C125.307 43.4 124.874 43.52 124.487 43.76C124.114 44 123.821 44.3333 123.607 44.76C123.394 45.1733 123.294 45.6467 123.307 46.18C123.294 46.7133 123.394 47.1867 123.607 47.6C123.821 48.0133 124.114 48.34 124.487 48.58C124.874 48.82 125.307 48.94 125.787 48.94ZM136.68 48.38L135.5 45.98L140.46 40.88H144.68L136.68 48.38ZM133.6 51.5V36.7H136.8V51.5H133.6ZM140.8 51.5L137.06 46.66L139.32 44.9L144.58 51.5H140.8ZM149.602 51.7C148.562 51.7 147.642 51.5333 146.842 51.2C146.055 50.8667 145.428 50.42 144.962 49.86L146.902 48.18C147.315 48.5933 147.782 48.9 148.302 49.1C148.822 49.2867 149.315 49.38 149.782 49.38C149.968 49.38 150.135 49.36 150.282 49.32C150.428 49.28 150.548 49.2267 150.642 49.16C150.748 49.08 150.828 48.9933 150.882 48.9C150.935 48.7933 150.962 48.6733 150.962 48.54C150.962 48.2733 150.842 48.0667 150.602 47.92C150.482 47.8533 150.282 47.7733 150.002 47.68C149.722 47.5867 149.362 47.48 148.922 47.36C148.295 47.2 147.748 47.0133 147.282 46.8C146.828 46.5733 146.455 46.3133 146.162 46.02C145.895 45.74 145.688 45.4333 145.542 45.1C145.395 44.7533 145.322 44.3667 145.322 43.94C145.322 43.4467 145.435 43 145.662 42.6C145.902 42.2 146.215 41.8533 146.602 41.56C147.002 41.2667 147.455 41.0467 147.962 40.9C148.482 40.74 149.015 40.66 149.562 40.66C150.148 40.66 150.708 40.7267 151.242 40.86C151.775 40.9933 152.268 41.18 152.722 41.42C153.188 41.66 153.602 41.9467 153.962 42.28L152.282 44.16C152.042 43.9333 151.768 43.7333 151.462 43.56C151.168 43.3733 150.862 43.2267 150.542 43.12C150.222 43.0133 149.928 42.96 149.662 42.96C149.462 42.96 149.282 42.98 149.122 43.02C148.975 43.0467 148.848 43.1 148.742 43.18C148.635 43.2467 148.555 43.3333 148.502 43.44C148.448 43.5333 148.422 43.6467 148.422 43.78C148.422 43.9133 148.455 44.04 148.522 44.16C148.602 44.28 148.708 44.38 148.842 44.46C148.975 44.54 149.188 44.6333 149.482 44.74C149.775 44.8333 150.175 44.9533 150.682 45.1C151.308 45.2733 151.848 45.4667 152.302 45.68C152.755 45.8933 153.115 46.1467 153.382 46.44C153.595 46.6667 153.755 46.9333 153.862 47.24C153.968 47.5333 154.022 47.8533 154.022 48.2C154.022 48.88 153.828 49.4867 153.442 50.02C153.068 50.54 152.548 50.9533 151.882 51.26C151.215 51.5533 150.455 51.7 149.602 51.7Z" fill="#12D6DF" />
                <path d="M93.0627 51.5V37.5H99.2427C100.203 37.5 101.016 37.64 101.683 37.92C102.349 38.1867 102.849 38.58 103.183 39.1C103.529 39.6067 103.703 40.22 103.703 40.94C103.703 41.74 103.503 42.4133 103.103 42.96C102.716 43.5067 102.149 43.8733 101.403 44.06L101.363 43.68C101.989 43.8133 102.529 44.0467 102.983 44.38C103.449 44.7133 103.809 45.1267 104.063 45.62C104.316 46.1 104.443 46.6467 104.443 47.26C104.443 47.9667 104.323 48.5867 104.083 49.12C103.843 49.64 103.496 50.08 103.043 50.44C102.589 50.8 102.056 51.0667 101.443 51.24C100.843 51.4133 100.176 51.5 99.4427 51.5H93.0627ZM96.2627 48.66H99.3227C99.6961 48.66 100.009 48.6 100.263 48.48C100.529 48.36 100.736 48.1867 100.883 47.96C101.029 47.72 101.103 47.4333 101.103 47.1C101.103 46.7933 101.023 46.5333 100.863 46.32C100.716 46.1067 100.503 45.9467 100.223 45.84C99.9427 45.72 99.6094 45.66 99.2227 45.66H96.2627V48.66ZM96.2627 43.12H98.7627C99.1094 43.12 99.4027 43.0667 99.6427 42.96C99.8961 42.84 100.083 42.68 100.203 42.48C100.336 42.2667 100.403 42.0133 100.403 41.72C100.403 41.2933 100.256 40.96 99.9627 40.72C99.6694 40.4667 99.2294 40.34 98.6427 40.34H96.2627V43.12ZM111.727 51.7C110.62 51.7 109.633 51.46 108.767 50.98C107.913 50.5 107.233 49.8467 106.727 49.02C106.233 48.1933 105.987 47.2467 105.987 46.18C105.987 45.1133 106.233 44.1667 106.727 43.34C107.233 42.5133 107.913 41.86 108.767 41.38C109.633 40.9 110.62 40.66 111.727 40.66C112.833 40.66 113.813 40.9 114.667 41.38C115.533 41.86 116.213 42.5133 116.707 43.34C117.2 44.1667 117.447 45.1133 117.447 46.18C117.447 47.2467 117.2 48.1933 116.707 49.02C116.213 49.8467 115.533 50.5 114.667 50.98C113.813 51.46 112.833 51.7 111.727 51.7ZM111.727 48.94C112.207 48.94 112.633 48.82 113.007 48.58C113.38 48.34 113.673 48.0133 113.887 47.6C114.1 47.1867 114.2 46.7133 114.187 46.18C114.2 45.6467 114.1 45.1733 113.887 44.76C113.673 44.3333 113.38 44 113.007 43.76C112.633 43.52 112.207 43.4 111.727 43.4C111.247 43.4 110.813 43.52 110.427 43.76C110.053 44 109.76 44.3333 109.547 44.76C109.333 45.1733 109.233 45.6467 109.247 46.18C109.233 46.7133 109.333 47.1867 109.547 47.6C109.76 48.0133 110.053 48.34 110.427 48.58C110.813 48.82 111.247 48.94 111.727 48.94ZM124.539 51.7C123.432 51.7 122.446 51.46 121.579 50.98C120.726 50.5 120.046 49.8467 119.539 49.02C119.046 48.1933 118.799 47.2467 118.799 46.18C118.799 45.1133 119.046 44.1667 119.539 43.34C120.046 42.5133 120.726 41.86 121.579 41.38C122.446 40.9 123.432 40.66 124.539 40.66C125.646 40.66 126.626 40.9 127.479 41.38C128.346 41.86 129.026 42.5133 129.519 43.34C130.012 44.1667 130.259 45.1133 130.259 46.18C130.259 47.2467 130.012 48.1933 129.519 49.02C129.026 49.8467 128.346 50.5 127.479 50.98C126.626 51.46 125.646 51.7 124.539 51.7ZM124.539 48.94C125.019 48.94 125.446 48.82 125.819 48.58C126.192 48.34 126.486 48.0133 126.699 47.6C126.912 47.1867 127.012 46.7133 126.999 46.18C127.012 45.6467 126.912 45.1733 126.699 44.76C126.486 44.3333 126.192 44 125.819 43.76C125.446 43.52 125.019 43.4 124.539 43.4C124.059 43.4 123.626 43.52 123.239 43.76C122.866 44 122.572 44.3333 122.359 44.76C122.146 45.1733 122.046 45.6467 122.059 46.18C122.046 46.7133 122.146 47.1867 122.359 47.6C122.572 48.0133 122.866 48.34 123.239 48.58C123.626 48.82 124.059 48.94 124.539 48.94ZM135.432 48.38L134.252 45.98L139.212 40.88H143.432L135.432 48.38ZM132.352 51.5V36.7H135.552V51.5H132.352ZM139.552 51.5L135.812 46.66L138.072 44.9L143.332 51.5H139.552ZM148.354 51.7C147.314 51.7 146.394 51.5333 145.594 51.2C144.807 50.8667 144.18 50.42 143.714 49.86L145.654 48.18C146.067 48.5933 146.534 48.9 147.054 49.1C147.574 49.2867 148.067 49.38 148.534 49.38C148.72 49.38 148.887 49.36 149.034 49.32C149.18 49.28 149.3 49.2267 149.394 49.16C149.5 49.08 149.58 48.9933 149.634 48.9C149.687 48.7933 149.714 48.6733 149.714 48.54C149.714 48.2733 149.594 48.0667 149.354 47.92C149.234 47.8533 149.034 47.7733 148.754 47.68C148.474 47.5867 148.114 47.48 147.674 47.36C147.047 47.2 146.5 47.0133 146.034 46.8C145.58 46.5733 145.207 46.3133 144.914 46.02C144.647 45.74 144.44 45.4333 144.294 45.1C144.147 44.7533 144.074 44.3667 144.074 43.94C144.074 43.4467 144.187 43 144.414 42.6C144.654 42.2 144.967 41.8533 145.354 41.56C145.754 41.2667 146.207 41.0467 146.714 40.9C147.234 40.74 147.767 40.66 148.314 40.66C148.9 40.66 149.46 40.7267 149.994 40.86C150.527 40.9933 151.02 41.18 151.474 41.42C151.94 41.66 152.354 41.9467 152.714 42.28L151.034 44.16C150.794 43.9333 150.52 43.7333 150.214 43.56C149.92 43.3733 149.614 43.2267 149.294 43.12C148.974 43.0133 148.68 42.96 148.414 42.96C148.214 42.96 148.034 42.98 147.874 43.02C147.727 43.0467 147.6 43.1 147.494 43.18C147.387 43.2467 147.307 43.3333 147.254 43.44C147.2 43.5333 147.174 43.6467 147.174 43.78C147.174 43.9133 147.207 44.04 147.274 44.16C147.354 44.28 147.46 44.38 147.594 44.46C147.727 44.54 147.94 44.6333 148.234 44.74C148.527 44.8333 148.927 44.9533 149.434 45.1C150.06 45.2733 150.6 45.4667 151.054 45.68C151.507 45.8933 151.867 46.1467 152.134 46.44C152.347 46.6667 152.507 46.9333 152.614 47.24C152.72 47.5333 152.774 47.8533 152.774 48.2C152.774 48.88 152.58 49.4867 152.194 50.02C151.82 50.54 151.3 50.9533 150.634 51.26C149.967 51.5533 149.207 51.7 148.354 51.7Z" fill="white" />
                <g clip-path="url(#clip0_367_824)">
                  <path d="M251.566 54.062L256.441 49.2651C256.53 49.1777 256.602 49.0662 256.651 48.939C256.701 48.8119 256.726 48.6724 256.727 48.531V46.6356C256.727 46.4397 256.546 46.3314 256.422 46.4514L252.133 50.672V32.9703C252.133 32.8416 252.048 32.7363 251.945 32.7363H250.539C250.436 32.7363 250.351 32.8416 250.351 32.9703V53.325C250.351 54.1088 251.073 54.5447 251.566 54.062Z" fill="white" />

                </g>
              </g>
              <path className='TopLeftEle' d="M22 28.5V35.5L18 38.5V27.5L27 18H39L34.5 21.5H28.5L22 28.5Z" fill="#00B3FF" />
              <path className='BottomRightEle' d="M279.5 64.5005L279.5 52.5005L283 48.5004L283 68.0005L259.5 68.0005L264.5 64.5005L279.5 64.5005Z" fill="#00B3FF" />
              <path className='TopEle' d="M119 18.5L126 24H225" stroke="#00B3FF" />
              <defs>
                <filter id="filter0_d_367_824" x="0.750977" y="0.5" width="299.264" height="84.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0705882 0 0 0 0 0.839216 0 0 0 0 0.87451 0 0 0 0.2 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_367_824" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_367_824" result="shape" />
                </filter>
                <filter id="filter1_b_367_824" x="0.750977" y="0.5" width="299.264" height="84.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_367_824" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_367_824" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_367_824" x1="281.01" y1="52.0807" x2="40.2449" y2="42.0445" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#330C5E" />
                  <stop offset="1" stop-color="#0F2A58" />
                </linearGradient>
                <clipPath id="clip0_367_824">
                  <rect width="29.9514" height="24.0003" fill="white" transform="matrix(0 1 -1 0 265.539 28.5244)" />
                </clipPath>
              </defs>
            </svg>
            </div>
            <div className="notes-option"  ><svg className='optionButton' onClick={() => {
              setdisItem(true);
            }} width="301" height="86" viewBox="0 0 301 86" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_367_879)">
                <g filter="url(#filter1_b_367_879)">
                  <path className='buttonBody' d="M116.999 20.6084L123.999 25.8348L273 25.8348L280.015 31.6084L280.015 49.6086L278 52.1084L278 63.1083L264 63.1083L261 65.1083L28.3696 65.1084L20.7506 57.5899L20.7506 38.189L22.9995 36.6084L22.9995 29.1084L28.9995 22.6084L34.9995 22.6084L37.4995 20.6084L116.999 20.6084Z" fill="url(#paint0_linear_367_879)" />
                </g>
                <path d="M94.3108 51.6084V37.6084H97.3508L104.691 47.6084L104.031 47.5084C103.964 47.0684 103.911 46.6484 103.871 46.2484C103.831 45.8484 103.791 45.4551 103.751 45.0684C103.724 44.6817 103.697 44.2884 103.671 43.8884C103.657 43.4884 103.644 43.0551 103.631 42.5884C103.631 42.1217 103.631 41.6151 103.631 41.0684V37.6084H106.931V51.6084H103.851L96.1908 41.2884L97.2108 41.4284C97.2774 42.0684 97.3308 42.6151 97.3708 43.0684C97.4241 43.5084 97.4641 43.9017 97.4908 44.2484C97.5308 44.5951 97.5574 44.9084 97.5708 45.1884C97.5841 45.4684 97.5908 45.7484 97.5908 46.0284C97.6041 46.2951 97.6108 46.5951 97.6108 46.9284V51.6084H94.3108ZM115.104 51.8084C113.997 51.8084 113.01 51.5684 112.144 51.0884C111.29 50.6084 110.61 49.9551 110.104 49.1284C109.61 48.3017 109.364 47.3551 109.364 46.2884C109.364 45.2217 109.61 44.2751 110.104 43.4484C110.61 42.6217 111.29 41.9684 112.144 41.4884C113.01 41.0084 113.997 40.7684 115.104 40.7684C116.21 40.7684 117.19 41.0084 118.044 41.4884C118.91 41.9684 119.59 42.6217 120.084 43.4484C120.577 44.2751 120.824 45.2217 120.824 46.2884C120.824 47.3551 120.577 48.3017 120.084 49.1284C119.59 49.9551 118.91 50.6084 118.044 51.0884C117.19 51.5684 116.21 51.8084 115.104 51.8084ZM115.104 49.0484C115.584 49.0484 116.01 48.9284 116.384 48.6884C116.757 48.4484 117.05 48.1217 117.264 47.7084C117.477 47.2951 117.577 46.8217 117.564 46.2884C117.577 45.7551 117.477 45.2817 117.264 44.8684C117.05 44.4417 116.757 44.1084 116.384 43.8684C116.01 43.6284 115.584 43.5084 115.104 43.5084C114.624 43.5084 114.19 43.6284 113.804 43.8684C113.43 44.1084 113.137 44.4417 112.924 44.8684C112.71 45.2817 112.61 45.7551 112.624 46.2884C112.61 46.8217 112.71 47.2951 112.924 47.7084C113.137 48.1217 113.43 48.4484 113.804 48.6884C114.19 48.9284 114.624 49.0484 115.104 49.0484ZM123.796 51.6084V38.3084H126.996V51.6084H123.796ZM121.916 43.7884V40.9884H129.056V43.7884H121.916ZM135.847 51.8084C134.674 51.8084 133.654 51.5751 132.787 51.1084C131.921 50.6284 131.247 49.9817 130.767 49.1684C130.287 48.3417 130.047 47.4017 130.047 46.3484C130.047 45.5351 130.181 44.7884 130.447 44.1084C130.714 43.4284 131.087 42.8417 131.567 42.3484C132.047 41.8417 132.614 41.4551 133.267 41.1884C133.934 40.9084 134.661 40.7684 135.447 40.7684C136.194 40.7684 136.874 40.9017 137.487 41.1684C138.114 41.4351 138.654 41.8084 139.107 42.2884C139.561 42.7684 139.907 43.3351 140.147 43.9884C140.387 44.6417 140.494 45.3551 140.467 46.1284L140.447 46.9884H131.987L131.527 45.1884H137.847L137.507 45.5684V45.1684C137.481 44.8351 137.374 44.5417 137.187 44.2884C137.014 44.0217 136.781 43.8151 136.487 43.6684C136.194 43.5217 135.861 43.4484 135.487 43.4484C134.967 43.4484 134.521 43.5551 134.147 43.7684C133.787 43.9684 133.514 44.2684 133.327 44.6684C133.141 45.0551 133.047 45.5351 133.047 46.1084C133.047 46.6951 133.167 47.2084 133.407 47.6484C133.661 48.0751 134.021 48.4084 134.487 48.6484C134.967 48.8884 135.534 49.0084 136.187 49.0084C136.641 49.0084 137.041 48.9417 137.387 48.8084C137.747 48.6751 138.134 48.4484 138.547 48.1284L140.047 50.2484C139.634 50.6084 139.194 50.9017 138.727 51.1284C138.261 51.3551 137.781 51.5217 137.287 51.6284C136.807 51.7484 136.327 51.8084 135.847 51.8084ZM146.086 51.8084C145.046 51.8084 144.126 51.6417 143.326 51.3084C142.539 50.9751 141.913 50.5284 141.446 49.9684L143.386 48.2884C143.799 48.7017 144.266 49.0084 144.786 49.2084C145.306 49.3951 145.799 49.4884 146.266 49.4884C146.453 49.4884 146.619 49.4684 146.766 49.4284C146.913 49.3884 147.033 49.3351 147.126 49.2684C147.233 49.1884 147.313 49.1017 147.366 49.0084C147.419 48.9017 147.446 48.7817 147.446 48.6484C147.446 48.3817 147.326 48.1751 147.086 48.0284C146.966 47.9617 146.766 47.8817 146.486 47.7884C146.206 47.6951 145.846 47.5884 145.406 47.4684C144.779 47.3084 144.233 47.1217 143.766 46.9084C143.313 46.6817 142.939 46.4217 142.646 46.1284C142.379 45.8484 142.173 45.5417 142.026 45.2084C141.879 44.8617 141.806 44.4751 141.806 44.0484C141.806 43.5551 141.919 43.1084 142.146 42.7084C142.386 42.3084 142.699 41.9617 143.086 41.6684C143.486 41.3751 143.939 41.1551 144.446 41.0084C144.966 40.8484 145.499 40.7684 146.046 40.7684C146.633 40.7684 147.193 40.8351 147.726 40.9684C148.259 41.1017 148.753 41.2884 149.206 41.5284C149.673 41.7684 150.086 42.0551 150.446 42.3884L148.766 44.2684C148.526 44.0417 148.253 43.8417 147.946 43.6684C147.653 43.4817 147.346 43.3351 147.026 43.2284C146.706 43.1217 146.413 43.0684 146.146 43.0684C145.946 43.0684 145.766 43.0884 145.606 43.1284C145.459 43.1551 145.333 43.2084 145.226 43.2884C145.119 43.3551 145.039 43.4417 144.986 43.5484C144.933 43.6417 144.906 43.7551 144.906 43.8884C144.906 44.0217 144.939 44.1484 145.006 44.2684C145.086 44.3884 145.193 44.4884 145.326 44.5684C145.459 44.6484 145.673 44.7417 145.966 44.8484C146.259 44.9417 146.659 45.0617 147.166 45.2084C147.793 45.3817 148.333 45.5751 148.786 45.7884C149.239 46.0017 149.599 46.2551 149.866 46.5484C150.079 46.7751 150.239 47.0417 150.346 47.3484C150.453 47.6417 150.506 47.9617 150.506 48.3084C150.506 48.9884 150.313 49.5951 149.926 50.1284C149.553 50.6484 149.033 51.0617 148.366 51.3684C147.699 51.6617 146.939 51.8084 146.086 51.8084Z" fill="#12D6DF" />
                <path d="M93.0627 51.6084V37.6084H96.1027L103.443 47.6084L102.783 47.5084C102.716 47.0684 102.663 46.6484 102.623 46.2484C102.583 45.8484 102.543 45.4551 102.503 45.0684C102.476 44.6817 102.449 44.2884 102.423 43.8884C102.409 43.4884 102.396 43.0551 102.383 42.5884C102.383 42.1217 102.383 41.6151 102.383 41.0684V37.6084H105.683V51.6084H102.603L94.9427 41.2884L95.9627 41.4284C96.0294 42.0684 96.0827 42.6151 96.1227 43.0684C96.1761 43.5084 96.2161 43.9017 96.2427 44.2484C96.2827 44.5951 96.3094 44.9084 96.3227 45.1884C96.3361 45.4684 96.3427 45.7484 96.3427 46.0284C96.3561 46.2951 96.3627 46.5951 96.3627 46.9284V51.6084H93.0627ZM113.856 51.8084C112.749 51.8084 111.762 51.5684 110.896 51.0884C110.042 50.6084 109.362 49.9551 108.856 49.1284C108.362 48.3017 108.116 47.3551 108.116 46.2884C108.116 45.2217 108.362 44.2751 108.856 43.4484C109.362 42.6217 110.042 41.9684 110.896 41.4884C111.762 41.0084 112.749 40.7684 113.856 40.7684C114.962 40.7684 115.942 41.0084 116.796 41.4884C117.662 41.9684 118.342 42.6217 118.836 43.4484C119.329 44.2751 119.576 45.2217 119.576 46.2884C119.576 47.3551 119.329 48.3017 118.836 49.1284C118.342 49.9551 117.662 50.6084 116.796 51.0884C115.942 51.5684 114.962 51.8084 113.856 51.8084ZM113.856 49.0484C114.336 49.0484 114.762 48.9284 115.136 48.6884C115.509 48.4484 115.802 48.1217 116.016 47.7084C116.229 47.2951 116.329 46.8217 116.316 46.2884C116.329 45.7551 116.229 45.2817 116.016 44.8684C115.802 44.4417 115.509 44.1084 115.136 43.8684C114.762 43.6284 114.336 43.5084 113.856 43.5084C113.376 43.5084 112.942 43.6284 112.556 43.8684C112.182 44.1084 111.889 44.4417 111.676 44.8684C111.462 45.2817 111.362 45.7551 111.376 46.2884C111.362 46.8217 111.462 47.2951 111.676 47.7084C111.889 48.1217 112.182 48.4484 112.556 48.6884C112.942 48.9284 113.376 49.0484 113.856 49.0484ZM122.548 51.6084V38.3084H125.748V51.6084H122.548ZM120.668 43.7884V40.9884H127.808V43.7884H120.668ZM134.599 51.8084C133.426 51.8084 132.406 51.5751 131.539 51.1084C130.672 50.6284 129.999 49.9817 129.519 49.1684C129.039 48.3417 128.799 47.4017 128.799 46.3484C128.799 45.5351 128.932 44.7884 129.199 44.1084C129.466 43.4284 129.839 42.8417 130.319 42.3484C130.799 41.8417 131.366 41.4551 132.019 41.1884C132.686 40.9084 133.412 40.7684 134.199 40.7684C134.946 40.7684 135.626 40.9017 136.239 41.1684C136.866 41.4351 137.406 41.8084 137.859 42.2884C138.312 42.7684 138.659 43.3351 138.899 43.9884C139.139 44.6417 139.246 45.3551 139.219 46.1284L139.199 46.9884H130.739L130.279 45.1884H136.599L136.259 45.5684V45.1684C136.232 44.8351 136.126 44.5417 135.939 44.2884C135.766 44.0217 135.532 43.8151 135.239 43.6684C134.946 43.5217 134.612 43.4484 134.239 43.4484C133.719 43.4484 133.272 43.5551 132.899 43.7684C132.539 43.9684 132.266 44.2684 132.079 44.6684C131.892 45.0551 131.799 45.5351 131.799 46.1084C131.799 46.6951 131.919 47.2084 132.159 47.6484C132.412 48.0751 132.772 48.4084 133.239 48.6484C133.719 48.8884 134.286 49.0084 134.939 49.0084C135.392 49.0084 135.792 48.9417 136.139 48.8084C136.499 48.6751 136.886 48.4484 137.299 48.1284L138.799 50.2484C138.386 50.6084 137.946 50.9017 137.479 51.1284C137.012 51.3551 136.532 51.5217 136.039 51.6284C135.559 51.7484 135.079 51.8084 134.599 51.8084ZM144.838 51.8084C143.798 51.8084 142.878 51.6417 142.078 51.3084C141.291 50.9751 140.665 50.5284 140.198 49.9684L142.138 48.2884C142.551 48.7017 143.018 49.0084 143.538 49.2084C144.058 49.3951 144.551 49.4884 145.018 49.4884C145.205 49.4884 145.371 49.4684 145.518 49.4284C145.665 49.3884 145.785 49.3351 145.878 49.2684C145.985 49.1884 146.065 49.1017 146.118 49.0084C146.171 48.9017 146.198 48.7817 146.198 48.6484C146.198 48.3817 146.078 48.1751 145.838 48.0284C145.718 47.9617 145.518 47.8817 145.238 47.7884C144.958 47.6951 144.598 47.5884 144.158 47.4684C143.531 47.3084 142.985 47.1217 142.518 46.9084C142.065 46.6817 141.691 46.4217 141.398 46.1284C141.131 45.8484 140.925 45.5417 140.778 45.2084C140.631 44.8617 140.558 44.4751 140.558 44.0484C140.558 43.5551 140.671 43.1084 140.898 42.7084C141.138 42.3084 141.451 41.9617 141.838 41.6684C142.238 41.3751 142.691 41.1551 143.198 41.0084C143.718 40.8484 144.251 40.7684 144.798 40.7684C145.385 40.7684 145.945 40.8351 146.478 40.9684C147.011 41.1017 147.505 41.2884 147.958 41.5284C148.425 41.7684 148.838 42.0551 149.198 42.3884L147.518 44.2684C147.278 44.0417 147.005 43.8417 146.698 43.6684C146.405 43.4817 146.098 43.3351 145.778 43.2284C145.458 43.1217 145.165 43.0684 144.898 43.0684C144.698 43.0684 144.518 43.0884 144.358 43.1284C144.211 43.1551 144.085 43.2084 143.978 43.2884C143.871 43.3551 143.791 43.4417 143.738 43.5484C143.685 43.6417 143.658 43.7551 143.658 43.8884C143.658 44.0217 143.691 44.1484 143.758 44.2684C143.838 44.3884 143.945 44.4884 144.078 44.5684C144.211 44.6484 144.425 44.7417 144.718 44.8484C145.011 44.9417 145.411 45.0617 145.918 45.2084C146.545 45.3817 147.085 45.5751 147.538 45.7884C147.991 46.0017 148.351 46.2551 148.618 46.5484C148.831 46.7751 148.991 47.0417 149.098 47.3484C149.205 47.6417 149.258 47.9617 149.258 48.3084C149.258 48.9884 149.065 49.5951 148.678 50.1284C148.305 50.6484 147.785 51.0617 147.118 51.3684C146.451 51.6617 145.691 51.8084 144.838 51.8084Z" fill="white" />
                <g clip-path="url(#clip0_367_879)">
                  <path d="M251.566 54.1704L256.441 49.3735C256.53 49.2861 256.602 49.1746 256.651 49.0474C256.701 48.9203 256.726 48.7808 256.727 48.6394V46.744C256.727 46.5481 256.546 46.4398 256.422 46.5598L252.133 50.7804V33.0787C252.133 32.95 252.048 32.8447 251.945 32.8447H250.539C250.436 32.8447 250.351 32.95 250.351 33.0787V53.4334C250.351 54.2172 251.073 54.6531 251.566 54.1704Z" fill="white" />
                </g>
              </g>
              <path className='TopLeftEle' d="M22 28.6084V35.6084L18 38.6084V27.6084L27 18.1084H39L34.5 21.6084H28.5L22 28.6084Z" fill="#00B3FF" />
              <path className='BottomRightEle' d="M279.5 64.6079L279.5 52.6079L283 48.6078L283 68.1079L259.5 68.1079L264.5 64.6079L279.5 64.6079Z" fill="#00B3FF" />
              <path className='TopEle' d="M119 18.6084L126 24.1084H225" stroke="#00B3FF" />
              <defs>
                <filter id="filter0_d_367_879" x="0.750977" y="0.608398" width="299.264" height="84.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0705882 0 0 0 0 0.839216 0 0 0 0 0.87451 0 0 0 0.2 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_367_879" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_367_879" result="shape" />
                </filter>
                <filter id="filter1_b_367_879" x="0.750977" y="0.608398" width="299.264" height="84.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_367_879" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_367_879" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_367_879" x1="281.01" y1="52.1891" x2="40.2449" y2="42.1529" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#330C5E" />
                  <stop offset="1" stop-color="#0F2A58" />
                </linearGradient>
                <clipPath id="clip0_367_879">
                  <rect width="29.9514" height="24.0003" fill="white" transform="matrix(0 1 -1 0 265.539 28.6328)" />
                </clipPath>
              </defs>
            </svg>
            </div>
            <div className="pyqs-option pb-3" ><svg className='optionButton' onClick={() => {
              setdisItem(true);
            }}
              width="301" height="86" viewBox="0 0 301 86" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_367_890)">
                <g filter="url(#filter1_b_367_890)">
                  <path className='buttonBody' d="M116.999 20.7168L123.999 25.9432L273 25.9432L280.015 31.7168L280.015 49.717L278 52.2168L278 63.2167L264 63.2167L261 65.2167L28.3696 65.2168L20.7506 57.6983L20.7506 38.2974L22.9995 36.7168L22.9995 29.2168L28.9995 22.7168L34.9995 22.7168L37.4995 20.7168L116.999 20.7168Z" fill="url(#paint0_linear_367_890)" />
                </g>
                <path d="M94.3108 51.7168V37.7168H100.351C101.231 37.7168 102.011 37.9168 102.691 38.3168C103.384 38.7168 103.931 39.2635 104.331 39.9568C104.744 40.6501 104.951 41.4301 104.951 42.2968C104.951 43.2035 104.744 44.0168 104.331 44.7368C103.931 45.4435 103.384 46.0035 102.691 46.4168C102.011 46.8301 101.231 47.0368 100.351 47.0368H97.7108V51.7168H94.3108ZM97.6508 44.0568H99.8708C100.164 44.0568 100.431 43.9835 100.671 43.8368C100.911 43.6901 101.104 43.4901 101.251 43.2368C101.397 42.9835 101.471 42.6901 101.471 42.3568C101.471 42.0101 101.397 41.7168 101.251 41.4768C101.104 41.2368 100.911 41.0501 100.671 40.9168C100.431 40.7835 100.164 40.7168 99.8708 40.7168H97.6508V44.0568ZM111.173 51.7168V44.7368L111.313 45.7168L105.653 37.7168H109.513L113.833 43.9168L112.073 43.8568L115.973 37.7168H119.713L114.293 45.9368L114.593 44.5768V51.7168H111.173ZM131.179 53.9168L125.819 46.6568L128.319 44.9168L133.619 52.1168L131.179 53.9168ZM126.999 51.9168C125.946 51.9168 124.979 51.7368 124.099 51.3768C123.219 51.0168 122.452 50.5101 121.799 49.8568C121.146 49.2035 120.639 48.4368 120.279 47.5568C119.919 46.6768 119.739 45.7101 119.739 44.6568C119.739 43.6035 119.919 42.6368 120.279 41.7568C120.639 40.8768 121.146 40.1101 121.799 39.4568C122.452 38.8035 123.219 38.2968 124.099 37.9368C124.979 37.5768 125.946 37.3968 126.999 37.3968C128.052 37.3968 129.019 37.5768 129.899 37.9368C130.779 38.2968 131.546 38.8035 132.199 39.4568C132.852 40.1101 133.352 40.8768 133.699 41.7568C134.059 42.6368 134.239 43.6035 134.239 44.6568C134.239 45.6968 134.059 46.6635 133.699 47.5568C133.352 48.4368 132.852 49.2035 132.199 49.8568C131.546 50.5101 130.779 51.0168 129.899 51.3768C129.019 51.7368 128.052 51.9168 126.999 51.9168ZM126.999 48.7168C127.546 48.7168 128.046 48.6168 128.499 48.4168C128.966 48.2168 129.366 47.9368 129.699 47.5768C130.046 47.2035 130.312 46.7701 130.499 46.2768C130.686 45.7835 130.779 45.2435 130.779 44.6568C130.779 44.0701 130.686 43.5301 130.499 43.0368C130.312 42.5435 130.046 42.1168 129.699 41.7568C129.366 41.3835 128.966 41.0968 128.499 40.8968C128.046 40.6968 127.546 40.5968 126.999 40.5968C126.452 40.5968 125.946 40.6968 125.479 40.8968C125.026 41.0968 124.626 41.3835 124.279 41.7568C123.932 42.1168 123.666 42.5435 123.479 43.0368C123.306 43.5301 123.219 44.0701 123.219 44.6568C123.219 45.2435 123.306 45.7901 123.479 46.2968C123.666 46.7901 123.932 47.2168 124.279 47.5768C124.626 47.9368 125.026 48.2168 125.479 48.4168C125.946 48.6168 126.452 48.7168 126.999 48.7168ZM140.109 51.9168C139.069 51.9168 138.149 51.7501 137.349 51.4168C136.563 51.0835 135.936 50.6368 135.469 50.0768L137.409 48.3968C137.823 48.8101 138.289 49.1168 138.809 49.3168C139.329 49.5035 139.823 49.5968 140.289 49.5968C140.476 49.5968 140.643 49.5768 140.789 49.5368C140.936 49.4968 141.056 49.4435 141.149 49.3768C141.256 49.2968 141.336 49.2101 141.389 49.1168C141.443 49.0101 141.469 48.8901 141.469 48.7568C141.469 48.4901 141.349 48.2835 141.109 48.1368C140.989 48.0701 140.789 47.9901 140.509 47.8968C140.229 47.8035 139.869 47.6968 139.429 47.5768C138.803 47.4168 138.256 47.2301 137.789 47.0168C137.336 46.7901 136.963 46.5301 136.669 46.2368C136.403 45.9568 136.196 45.6501 136.049 45.3168C135.903 44.9701 135.829 44.5835 135.829 44.1568C135.829 43.6635 135.943 43.2168 136.169 42.8168C136.409 42.4168 136.723 42.0701 137.109 41.7768C137.509 41.4835 137.963 41.2635 138.469 41.1168C138.989 40.9568 139.523 40.8768 140.069 40.8768C140.656 40.8768 141.216 40.9435 141.749 41.0768C142.283 41.2101 142.776 41.3968 143.229 41.6368C143.696 41.8768 144.109 42.1635 144.469 42.4968L142.789 44.3768C142.549 44.1501 142.276 43.9501 141.969 43.7768C141.676 43.5901 141.369 43.4435 141.049 43.3368C140.729 43.2301 140.436 43.1768 140.169 43.1768C139.969 43.1768 139.789 43.1968 139.629 43.2368C139.483 43.2635 139.356 43.3168 139.249 43.3968C139.143 43.4635 139.063 43.5501 139.009 43.6568C138.956 43.7501 138.929 43.8635 138.929 43.9968C138.929 44.1301 138.963 44.2568 139.029 44.3768C139.109 44.4968 139.216 44.5968 139.349 44.6768C139.483 44.7568 139.696 44.8501 139.989 44.9568C140.283 45.0501 140.683 45.1701 141.189 45.3168C141.816 45.4901 142.356 45.6835 142.809 45.8968C143.263 46.1101 143.623 46.3635 143.889 46.6568C144.103 46.8835 144.263 47.1501 144.369 47.4568C144.476 47.7501 144.529 48.0701 144.529 48.4168C144.529 49.0968 144.336 49.7035 143.949 50.2368C143.576 50.7568 143.056 51.1701 142.389 51.4768C141.723 51.7701 140.963 51.9168 140.109 51.9168Z" fill="#12D6DF" />
                <path d="M93.0627 51.7168V37.7168H99.1027C99.9827 37.7168 100.763 37.9168 101.443 38.3168C102.136 38.7168 102.683 39.2635 103.083 39.9568C103.496 40.6501 103.703 41.4301 103.703 42.2968C103.703 43.2035 103.496 44.0168 103.083 44.7368C102.683 45.4435 102.136 46.0035 101.443 46.4168C100.763 46.8301 99.9827 47.0368 99.1027 47.0368H96.4627V51.7168H93.0627ZM96.4027 44.0568H98.6227C98.9161 44.0568 99.1827 43.9835 99.4227 43.8368C99.6627 43.6901 99.8561 43.4901 100.003 43.2368C100.149 42.9835 100.223 42.6901 100.223 42.3568C100.223 42.0101 100.149 41.7168 100.003 41.4768C99.8561 41.2368 99.6627 41.0501 99.4227 40.9168C99.1827 40.7835 98.9161 40.7168 98.6227 40.7168H96.4027V44.0568ZM109.925 51.7168V44.7368L110.065 45.7168L104.405 37.7168H108.265L112.585 43.9168L110.825 43.8568L114.725 37.7168H118.465L113.045 45.9368L113.345 44.5768V51.7168H109.925ZM129.931 53.9168L124.571 46.6568L127.071 44.9168L132.371 52.1168L129.931 53.9168ZM125.751 51.9168C124.698 51.9168 123.731 51.7368 122.851 51.3768C121.971 51.0168 121.204 50.5101 120.551 49.8568C119.898 49.2035 119.391 48.4368 119.031 47.5568C118.671 46.6768 118.491 45.7101 118.491 44.6568C118.491 43.6035 118.671 42.6368 119.031 41.7568C119.391 40.8768 119.898 40.1101 120.551 39.4568C121.204 38.8035 121.971 38.2968 122.851 37.9368C123.731 37.5768 124.698 37.3968 125.751 37.3968C126.804 37.3968 127.771 37.5768 128.651 37.9368C129.531 38.2968 130.298 38.8035 130.951 39.4568C131.604 40.1101 132.104 40.8768 132.451 41.7568C132.811 42.6368 132.991 43.6035 132.991 44.6568C132.991 45.6968 132.811 46.6635 132.451 47.5568C132.104 48.4368 131.604 49.2035 130.951 49.8568C130.298 50.5101 129.531 51.0168 128.651 51.3768C127.771 51.7368 126.804 51.9168 125.751 51.9168ZM125.751 48.7168C126.298 48.7168 126.798 48.6168 127.251 48.4168C127.718 48.2168 128.118 47.9368 128.451 47.5768C128.798 47.2035 129.064 46.7701 129.251 46.2768C129.438 45.7835 129.531 45.2435 129.531 44.6568C129.531 44.0701 129.438 43.5301 129.251 43.0368C129.064 42.5435 128.798 42.1168 128.451 41.7568C128.118 41.3835 127.718 41.0968 127.251 40.8968C126.798 40.6968 126.298 40.5968 125.751 40.5968C125.204 40.5968 124.698 40.6968 124.231 40.8968C123.778 41.0968 123.378 41.3835 123.031 41.7568C122.684 42.1168 122.418 42.5435 122.231 43.0368C122.058 43.5301 121.971 44.0701 121.971 44.6568C121.971 45.2435 122.058 45.7901 122.231 46.2968C122.418 46.7901 122.684 47.2168 123.031 47.5768C123.378 47.9368 123.778 48.2168 124.231 48.4168C124.698 48.6168 125.204 48.7168 125.751 48.7168ZM138.861 51.9168C137.821 51.9168 136.901 51.7501 136.101 51.4168C135.315 51.0835 134.688 50.6368 134.221 50.0768L136.161 48.3968C136.575 48.8101 137.041 49.1168 137.561 49.3168C138.081 49.5035 138.575 49.5968 139.041 49.5968C139.228 49.5968 139.395 49.5768 139.541 49.5368C139.688 49.4968 139.808 49.4435 139.901 49.3768C140.008 49.2968 140.088 49.2101 140.141 49.1168C140.195 49.0101 140.221 48.8901 140.221 48.7568C140.221 48.4901 140.101 48.2835 139.861 48.1368C139.741 48.0701 139.541 47.9901 139.261 47.8968C138.981 47.8035 138.621 47.6968 138.181 47.5768C137.555 47.4168 137.008 47.2301 136.541 47.0168C136.088 46.7901 135.715 46.5301 135.421 46.2368C135.155 45.9568 134.948 45.6501 134.801 45.3168C134.655 44.9701 134.581 44.5835 134.581 44.1568C134.581 43.6635 134.695 43.2168 134.921 42.8168C135.161 42.4168 135.475 42.0701 135.861 41.7768C136.261 41.4835 136.715 41.2635 137.221 41.1168C137.741 40.9568 138.275 40.8768 138.821 40.8768C139.408 40.8768 139.968 40.9435 140.501 41.0768C141.035 41.2101 141.528 41.3968 141.981 41.6368C142.448 41.8768 142.861 42.1635 143.221 42.4968L141.541 44.3768C141.301 44.1501 141.028 43.9501 140.721 43.7768C140.428 43.5901 140.121 43.4435 139.801 43.3368C139.481 43.2301 139.188 43.1768 138.921 43.1768C138.721 43.1768 138.541 43.1968 138.381 43.2368C138.235 43.2635 138.108 43.3168 138.001 43.3968C137.895 43.4635 137.815 43.5501 137.761 43.6568C137.708 43.7501 137.681 43.8635 137.681 43.9968C137.681 44.1301 137.715 44.2568 137.781 44.3768C137.861 44.4968 137.968 44.5968 138.101 44.6768C138.235 44.7568 138.448 44.8501 138.741 44.9568C139.035 45.0501 139.435 45.1701 139.941 45.3168C140.568 45.4901 141.108 45.6835 141.561 45.8968C142.015 46.1101 142.375 46.3635 142.641 46.6568C142.855 46.8835 143.015 47.1501 143.121 47.4568C143.228 47.7501 143.281 48.0701 143.281 48.4168C143.281 49.0968 143.088 49.7035 142.701 50.2368C142.328 50.7568 141.808 51.1701 141.141 51.4768C140.475 51.7701 139.715 51.9168 138.861 51.9168Z" fill="white" />
                <g clip-path="url(#clip0_367_890)">
                  <path d="M251.566 54.2788L256.441 49.4819C256.53 49.3945 256.602 49.283 256.651 49.1558C256.701 49.0287 256.726 48.8892 256.727 48.7478V46.8524C256.727 46.6565 256.546 46.5482 256.422 46.6682L252.133 50.8888V33.1871C252.133 33.0584 252.048 32.9531 251.945 32.9531H250.539C250.436 32.9531 250.351 33.0584 250.351 33.1871V53.5418C250.351 54.3256 251.073 54.7615 251.566 54.2788Z" fill="white" />
                </g>
              </g>
              <path className='TopLeftEle' d="M22 28.7168V35.7168L18 38.7168V27.7168L27 18.2168H39L34.5 21.7168H28.5L22 28.7168Z" fill="#00B3FF" />
              <path className='BottomRightEle' d="M279.5 64.7173L279.5 52.7173L283 48.7172L283 68.2173L259.5 68.2173L264.5 64.7173L279.5 64.7173Z" fill="#00B3FF" />
              <path className='TopEle' d="M119 18.7168L126 24.2168H225" stroke="#00B3FF" />
              <defs>
                <filter id="filter0_d_367_890" x="0.750977" y="0.716797" width="299.264" height="84.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0705882 0 0 0 0 0.839216 0 0 0 0 0.87451 0 0 0 0.2 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_367_890" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_367_890" result="shape" />
                </filter>

                <filter id="filter1_b_367_890" x="0.750977" y="0.716797" width="299.264" height="84.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_367_890" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_367_890" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_367_890" x1="281.01" y1="52.2975" x2="40.2449" y2="42.2613" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#330C5E" />
                  <stop offset="1" stop-color="#0F2A58" />
                </linearGradient>
                <clipPath id="clip0_367_890">
                  <rect width="29.9514" height="24.0003" fill="white" transform="matrix(0 1 -1 0 265.539 28.7412)" />
                </clipPath>
              </defs>
            </svg>
            </div>

          </div>
        </div>
      </div>
      <div className="right-content  justify-center flex flex-col ">
        <ul className='flex flex-col gap-9 items-end pr-2 desktopView'>
          {

            subs.map((element, index) => {
              return (
                <li className='flex gap-4' onClick={() => setCurrSub(index)}><RadioButtonHigh subject={element} /> </li>

              )
            })}

        </ul>

      </div>
    </div>
  </div>
  )
}

export default ResourceHub;