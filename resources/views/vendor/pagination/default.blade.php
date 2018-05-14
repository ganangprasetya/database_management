{{-- @if ($paginator->hasPages()) --}}
    <ul class="pagination justify-content-end">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <li class="page-item disabled">
                <a class="page-link pre-link"><span class="fa fa-angle-left"></span></a>
            </li>
        @else
            <li class="page-item mr-1">
                <a class="page-link pre-link" href="{{ $paginator->url(1) }}" tabindex="-1"><span class="fa fa-angle-double-left"></span></a>
            </li>
            <li class="page-item">
                <a class="page-link pre-link" href="{{ $paginator->previousPageUrl() }}" rel="prev"><span class="fa fa-angle-left"></span></a>
            </li>
        @endif

        {{-- Pagination Elements --}}
        @foreach ($elements as $element)
            {{-- "Three Dots" Separator --}}
            @if (is_string($element))
                <li class="page-item disabled"><span class="page-link">{{ $element }}</span></li>
            @endif

            {{-- Array Of Links --}}
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <li class="page-item active"><span class="page-link">{{ $page }}</span></li>
                    @else
                        <li class="page-item"><a class="page-link" href="{{ $url }}">{{ $page }}</a></li>
                    @endif
                @endforeach
            @endif
        @endforeach

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <li class="page-item">
                <a class="page-link pre-link" href="{{ $paginator->nextPageUrl() }}" rel="next"><span class="fa fa-angle-right"></span></a>
            </li>
            <li class="page-item ml-1">
                <a class="page-link pre-link" href="{{ $paginator->url($paginator->lastPage()) }}" tabindex="-1"><span class="fa fa-angle-double-right"></span></a>
            </li>
        @else
            <li class="page-item disabled">
                <a class="page-link pre-link"><span class="fa fa-angle-right"></span></a>
            </li>
        @endif
    </ul>
{{-- @endif --}}
