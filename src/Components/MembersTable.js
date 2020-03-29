import React from "react";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router-dom'

const AddMemberButton = () => {
    const history = useHistory();

    function handleClick() {
        history.push('/addMember')
    }

    return(
    <Button
        variant="contained"
        color="primary"
        style={{ float: 'left' , textDecoration: 'none'}}
        onClick={handleClick}
    >
        + Add Contact
    </Button>
    )
};

const MembersTable = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{paddingBottom: 15}}>
                    <AddMemberButton />
            </div>
            <div>
                <MaterialTable
                    title=""
                    columns={[
                        { title: 'First Name', field: 'firstName' },
                        { title: 'Last Name', field: 'lastName' },
                        { title: 'Email', field: 'email', type: 'email' },
                        { title: 'Street', field: 'streetAddress',
                        cellStyle: {
                                whiteSpace: 'nowrap',
                        }},
                        { title: 'Apt/Unit#', field: 'aptNumber'},
                        { title: 'City', field: 'memberCity'},
                        { title: 'State', field: 'memberState'},
                        { title: 'Zip Code', field: 'memberZip'},
                        { title: 'Phone #', field: 'memberPhone'},


                    ]}
                    options={{
                        toolbarButtonAlignment: 'left',
                        searchFieldAlignment: 'left'
                    }}
                    data={[
                        { firstName: 'Tester',
                            lastName: 'McTestface',
                            email: 'tester@test.com',
                            streetAddress: '1234 Test Lane',
                            aptNumber: 'N/A',
                            memberCity: 'Testville',
                            memberState: 'TX',
                            memberZip: '99999',
                            memberPhone: '111-111-1111'
                        },
                        { firstName: 'Tester jr',
                            lastName: 'McTestface',
                            email: 'testtyJoe@tester.com',
                            streetAddress: '1111 Test blvd',
                            aptNumber: 'N/A',
                            memberCity: 'Testtown',
                            memberState: 'OK',
                            memberZip: '99999',
                            memberPhone: '222-222-2222'
                        }
                    ]}
                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                        const data = this.state.data;
                                        data.push(newData);
                                        this.setState({ data }, () => resolve());
                                    }
                                    resolve()
                                }, 1000)
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                        const data = this.state.data;
                                        const index = data.indexOf(oldData);
                                        data[index] = newData;
                                        this.setState({ data }, () => resolve());
                                    }
                                    resolve()
                                }, 1000)
                            }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                        let data = this.state.data;
                                        const index = data.indexOf(oldData);
                                        data.splice(index, 1);
                                        this.setState({ data }, () => resolve());
                                    }
                                    resolve()
                                }, 1000)
                            }),
                    }}
                />
            </div>
        </div>
    )

};

export default MembersTable;