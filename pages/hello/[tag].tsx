import { useRouter } from 'next/router';

// url = http://localhost:3000/hello/dodo
// url = http://localhost:3000/hello/sam
// url = http://localhost:3000/hello/kevin
// url = http://facebook.com/profile/<asde3q2e234>
// url = http://something.com/tag/technology
// url = http://websiteberita.com/tag/technology
// url = http://tempo.co/tag/tag-yang-gak-ada
export default function HelloName() {
  const router = useRouter();
  const tagFromUrl = router.query.tag;
  return <p>Anda mengakses tag : {tagFromUrl}</p>;
}
// snake_case
// camelCase
// CapitalCamelCase

// Page list of places -> Jakarta, New York, Sydney
// Masing-masing place -> Jakarta ON, New York OFF, Sydney ON
// URL https://domain.tech/places/on -> on -> fetch("api/places?status=on") -> JSON [{"city":"Jakarta"}, {"city":"Sydney"}] -> display Jakarta & Sydney
// URL https://domain.tech/places/off -> off -> fetch("api/places?status=off") -> JSON [{"city":"New York"}] -> display New York
