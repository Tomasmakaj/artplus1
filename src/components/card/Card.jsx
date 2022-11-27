import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card className='card'>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title> About Art +1 </Card.Title>
          <Card.Text>

          Art+1 Construction is a General Contractor specializing in the residential and commercial sector with expertise in retail, corporate interiors and core construction. Our team prides itself in providing top quality service, excellent workmanship and the highest standard of professionalism.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title> Commercial & Residential Construction </Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;