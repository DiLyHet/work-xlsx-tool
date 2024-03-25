import React, {useEffect, useState} from "react";
import {additiveDataTemplate, userDataTemplate} from "./Templates";
import './App.css';

const AdditiveSettingsRender = props => {
  
    useEffect(() => {
      // .userData = getUsersDataMap();
        props.setAdditiveData({...props.additiveData, userData: getUsersDataMap()})
        console.log(props);
    }, []);
    const handleChangeAdditiveSales = (event) => {
        console.log(event.target.id);
        let userDataTemp = props.additiveData.userData;
        userDataTemp.get(event.target.id)[event.target.name] = Number(event.target.value);
        props.setAdditiveData({...props.additiveData, userData: userDataTemp})
       
        console.log(props.additiveData);
    }
    const AdditiveSettingsForAdditiveSales = (nameProps) => {
        
        return (

            <div className={"salesGrid"}>
                <div className={"salerName"}>
                    {nameProps.name}
                </div>
                <div className={"salesCol"}>
                    <p className={"itemName"}>СОП</p>
                    <input className={"salesInput"} type={"number"} name={'sopCount'} id={nameProps.name}
                        value={props.additiveData.userData.size > 0 ? props.additiveData.userData.get(nameProps.name).sopCount : 0}
                           onChange={handleChangeAdditiveSales}/>
                </div>
                <div className={"salesCol"}>
                    <p className={"itemName"}>И-СОП</p>
                    <input className={"salesInput"} type={"number"} id={nameProps.name} name={'isopCount'}
                        value={props.additiveData.userData.size > 0 ? props.additiveData.userData.get(nameProps.name).isopCount : 0}
                           onChange={handleChangeAdditiveSales}/>
                </div>
                <div className={"salesCol"}>
                    <p className={"itemName"}>ПТ</p>
                    <input className={"salesInput"} type={"number"} id={nameProps.name} name={'ptCount'}
                        value={props.additiveData.userData.size > 0 ? props.additiveData.userData.get(nameProps.name).ptCount : 0}
                           onChange={handleChangeAdditiveSales}/>
                </div>
                <div className={"salesCol"}>
                    <p className={"itemName"}>ФЗ</p>
                    <input className={"salesInput"} type={"number"} id={nameProps.name} name={'fzCount'}
                        value={props.additiveData.userData.size > 0 ? props.additiveData.userData.get(nameProps.name).fzCount : 0}
                           onChange={handleChangeAdditiveSales}/>
                </div>
                <div className={"salesCol"}>
                    <p className={"itemName"}>БОТ</p>
                    <input className={"salesInput"} type={"number"} id={nameProps.name} name={'botCount'}
                        value={props.additiveData.userData.size > 0 ? props.additiveData.userData.get(nameProps.name).botCount : 0}
                           onChange={handleChangeAdditiveSales}/>
                </div>

            </div>
        );
    }
    return (
        <div className="additiveSettings">

            <AdditiveSettingsForAdditiveSales name={'Жидкова О.Ю.'}/>
            <AdditiveSettingsForAdditiveSales name={'Осипова В.Ю.'}/>
            <AdditiveSettingsForAdditiveSales name={'Князь Л.Т.'}/>
            <AdditiveSettingsForAdditiveSales name={'Мякота В.А.'}/>
            <AdditiveSettingsForAdditiveSales name={'Гетманова Л.С.'}/>

        </div>
    );
}


function getUsersDataMap() {
    let tempUserDataEvent = new Map();
    let zhidkova = (Object.assign({}, userDataTemplate));
    zhidkova.userName = 'Жидкова О.Ю.';
    let knaz = (Object.assign({}, userDataTemplate));
    knaz.userName = 'Князь Л.Т.';
    let osipova = (Object.assign({}, userDataTemplate));
    osipova.userName = 'Осипова В.Ю.';
    let makota = (Object.assign({}, userDataTemplate));
    makota.userName = 'Мякота В.А.';
    let hetmanova = (Object.assign({}, userDataTemplate));
    hetmanova.userName = 'Гетманова Л.С.';
    tempUserDataEvent.set('Жидкова О.Ю.', zhidkova);
    tempUserDataEvent.set('Осипова В.Ю.', osipova);
    tempUserDataEvent.set('Князь Л.Т.', knaz);
    tempUserDataEvent.set('Мякота В.А.', makota);
    tempUserDataEvent.set('Гетманова Л.С.', hetmanova);
    return tempUserDataEvent;
}

export default AdditiveSettingsRender;