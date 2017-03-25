import React from 'react'
import CardLeft from './CardLeft'
import CardRight from './CardRight'
import { connect } from 'react-redux'
import {Map} from 'immutable'


const Screen5 = ({inviteds, okrs }) => {
    debugger

    const listOkrs = okrs.map((okr, key) => {
        return <CardLeft key={key} description={okr.get('description')}/>
    })

    const listNegatives = inviteds.map((invited) => {
        return invited.get('negatives').map((neg, key) => {
            return <CardRight key={key} description={neg.get('description')}/>
        })
    });

    const listPositives = inviteds.map((invited) => {
        return invited.get('positives').map((pos, key) => {
            return <CardRight key={key} description={pos.get('description')}/>
        })
    });

    return (
        <div className="mdc-layout-grid">
            <div className="mdc-layout-grid__cell">
                {listOkrs}
            </div>
            <div className="mdc-layout-grid__cell">
                <div className="mdc-layout-grid">
                    <div className="mdc-layout-grid__cell">
                        <div> =( </div> <br></br>
                        {listNegatives}
                    </div>
                    <div className="mdc-layout-grid__cell">
                        <div> =D </div> <br></br>
                        {listPositives}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(({ profile }) => ({ 
    inviteds: profile.getIn(['feedbacks', '1239987365', 'inviteds']),
    okrs: profile.getIn(['feedbacks', '1239987365', 'okrs'])
 }))(Screen5);