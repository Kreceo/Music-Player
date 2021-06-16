import 'bootstrap/dist/css/bootstrap.css'

export default function Homepage() {
    return(
        <>
        <div className="d-flex container flex-row align-items-center vh-100">
            <div class="container mt-5 mb-3">
                <div class="row">
                    <div class="col-md-6">
                        <a href="/MusicPlayer" className="text-decoration-none">
                            <div class="card p-5 mb-2 shadow">
                                <h1 class="display-3 text-center">Music Player</h1>
                            </div>
                        </a>
                    </div> 
                    <div class="col-md-6">
                        <a href="/GitProfiler" className="text-decoration-none">
                            <div class="card p-5 mb-2 shadow">
                                <h1 class="display-3 text-center">Git Profiler</h1>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}