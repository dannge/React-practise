import Header from './Header';
import PostContent from './PostContent';
import Postimage from './Postimage';
import Box from './Box';
import PostList from './PostList';

function Praktika1() {
	return (
		<div className="container text-center p-4 ">
			<div className="row ">
				<div className="col">
					<Header
						title="COFFEE"
						image="https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F08%2F20%2FGettyImages-1165807395-2000.jpg"
						alt="header-img"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5 ">
					<Postimage
						img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_nq4C0V9vOkom9oDHM6M7mZjiOrjETssab9mKear_TLluKVx5AuZDsZDKiHmkHleSio&usqp=CAU"
						alt="Postimage-img"
					/>
					<PostContent heading="Coffea Arabica" />
					<PostContent paragraph="Coffee cultivation and trade began on the Arabian Peninsula. By the 15th century, coffee was being grown
					in the Yemeni district of Arabia and by the 16th century it was known in Persia, Egypt, Syria, and
					Turkey." />
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5">
					<Postimage
						img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxHbteKx5_S6J9ekeMLGD7DR_bwR3spmMtGzPFgRyhnDddMHcTvCKpWwOJrlgIvNqKIs&usqp=CAU"
						alt="Postimage-img"
					/>
					<PostContent heading="Coffea canephora" />
					<PostContent paragraph="Coffee was not only enjoyed in homes, but also in the many public coffee houses — called qahveh khaneh — which began to appear in cities across the Near East. The popularity of the coffee houses was unequaled ." />
				</div>
			</div>

			<div className="row">
				<PostList />
			</div>
			<div className="row d-flex g-5 ms-5">
				<div className="col-lg-3 col-md-6 col-sm-12">
					<Box color="rgb(46, 22, 22)" />
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12">
					<Box color="rgb(85, 61, 61)" />
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12">
					<Box color="rgb(85, 61, 61)" />
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12">
					<Box color="rgb(46, 22, 22)" />
				</div>
			</div>
		</div>
	);
}

export default Praktika1;
