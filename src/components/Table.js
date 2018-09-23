import React, { Component } from 'react'
import styled from 'styled-components'

const Table = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 1em auto;

  @media only screen and (max-width: 900px) {
    flex-direction: row;
    width: 95%;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${p => p.main ? '#3f9143' : '#f2f2f2'};
  color: ${p => p.main ? '#FFF' : '#000'};
  width: 100%;
  padding: 0 1em;

  @media only screen and (max-width: 900px) {
    width: 50%;
    flex-direction: column;
    align-items: center;
    /* background-color: #f2f2f2; */
  }
`

const Column = styled.div`
  padding: 12px; 
  border-right: 1px solid #ccc; 
  text-align: left; 
  text-align: center;
  width: 25%;
  
  &:last-child {
    border-right: 1px solid transparent;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    text-align: left;
    border-right: 1px solid transparent;
  }
`

const Panel = styled.div`
  position: relative;
`

const TableMobile = ({ data }) => (
  <div>
    {data.map(prop => (
      <Table key={prop.propName}>
        <Row main>
          <Column>Prop Name</Column>
          <Column>Type</Column>
          <Column>Default</Column>
          <Column>Description</Column>
        </Row>
        <Row>
          <Column>{ prop.propName }</Column>
          <Column>{ prop.type }</Column>
          <Column>{ prop.default }</Column>
          <Column>{ prop.description }</Column>
        </Row>
      </Table>
    ))}
  </div>
)

const TableDesktop = ({ data }) => (
  <Table>
    <Row main>
      <Column>Prop Name</Column>
      <Column>Type</Column>
      <Column>Default</Column>
      <Column>Description</Column>
    </Row>
    {data.map(prop => (
      <Row key={prop.propName}>
        <Column>{ prop.propName }</Column>
        <Column>{ prop.type }</Column>
        <Column>{ prop.default }</Column>
        <Column>{ prop.description }</Column>
      </Row>
    ))}
  </Table>
)

export default class extends Component {
  state = { isMobile: false }
  componentDidMount () {
    window.addEventListener('resize', this.handleResize)

    if (window.innerWidth < 900) {
      this.setState({ isMobile: true })
    }
  }

  handleResize = (e) => {
    if (window.innerWidth < 900) {
      this.setState({ isMobile: true })
    } else {
      this.setState({ isMobile: false })
    }
  }

  render () {
    const { isMobile } = this.state

    return (
      <Panel>
          {
            isMobile
            ? <TableMobile {...this.props} />  
            : <TableDesktop {...this.props} />  
          }
      </Panel>
    )
  }
}
